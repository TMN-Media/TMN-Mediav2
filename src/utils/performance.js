/** @format */

/**
 * Performance monitoring utility functions
 * These functions help monitor various performance aspects of the website
 */

/**
 * Logs web vitals metrics to console and can be extended to send to analytics
 * @param {Object} metric - The web vital metric object
 */
export const reportWebVitals = metric => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(metric);
  }

  // Can be extended to send metrics to analytics service
  // Example: sendToAnalytics(metric);
};

/**
 * Measures component render time
 * @param {string} componentName - Name of the component being measured
 * @returns {Function} - Function to call when render is complete
 */
export const measureRenderTime = componentName => {
  const startTime = performance.now();

  return () => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
    }

    return renderTime;
  };
};

/**
 * Tracks First Input Delay (FID) - a key user-centric performance metric
 */
export const trackFID = () => {
  // Check if the browser supports PerformanceObserver and the required entry types
  if (typeof PerformanceObserver !== 'undefined') {
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        // Log FID and other metrics
        const fidMetric = {
          name: 'FID',
          value: entry.processingStart - entry.startTime,
          id: entry.id,
        };

        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('First Input Delay:', fidMetric);
        }
      });
    });

    // Start observing first-input entries
    observer.observe({ type: 'first-input', buffered: true });
  }
};

/**
 * Initialize performance monitoring
 * Call this function as early as possible in your application
 */
export const initPerformanceMonitoring = () => {
  // Start tracking FID
  trackFID();

  // Track page load time
  window.addEventListener('load', () => {
    if (performance && performance.timing) {
      setTimeout(() => {
        const pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log(`Page Load Time: ${pageLoadTime}ms`);
        }
      }, 0);
    }
  });
};
