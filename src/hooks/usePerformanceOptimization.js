/** @format */

import { useEffect, useRef, useState } from 'react';
import { measureRenderTime } from '../utils/performance';

/**
 * Custom hook for optimizing component performance
 *
 * Features:
 * - Lazy loading images/components
 * - Measuring component render time
 * - Throttling expensive operations
 * - Using IntersectionObserver for viewport detection
 *
 * @param {string} componentName - Name of the component using this hook
 * @param {Object} options - Configuration options
 * @returns {Object} - Optimization utilities
 */
const usePerformanceOptimization = (componentName, options = {}) => {
  const { lazyLoad = true, measureTime = true, throttleTime = 100, rootMargin = '50px' } = options;

  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);
  const renderTimeRef = useRef(null);

  // Throttling function for expensive operations
  const throttle = (callback, delay = throttleTime) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return callback(...args);
    };
  };

  // Measure initial render time if option is enabled
  useEffect(() => {
    if (measureTime) {
      const endMeasure = measureRenderTime(componentName);
      renderTimeRef.current = endMeasure;
    }
  }, [componentName, measureTime]);

  // Set up IntersectionObserver for lazy loading if option is enabled
  useEffect(() => {
    if (!lazyLoad || !ref.current) return;

    const currentRef = ref.current; // Store ref.current in a variable to use in cleanup

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          // Disconnect once element is in viewport
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [lazyLoad, rootMargin]);

  return {
    ref,
    isInViewport,
    throttle,
    measureRenderTime: () => {
      if (renderTimeRef.current) {
        return renderTimeRef.current();
      }
      return 0;
    },
  };
};

export default usePerformanceOptimization;
