/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

/**
 * Component for adding structured data to pages
 * Implements JSON-LD for better SEO and rich search results
 */
const StructuredData = ({ type, data }) => {
  const getStructuredData = () => {
    // Base schema with @context
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return JSON.stringify(baseSchema);
  };

  return (
    <Helmet>
      <script type="application/ld+json">{getStructuredData()}</script>
    </Helmet>
  );
};

StructuredData.propTypes = {
  /**
   * The Schema.org type (e.g. 'Organization', 'LocalBusiness', 'Service')
   */
  type: PropTypes.string.isRequired,
  
  /**
   * Object containing the schema data
   */
  data: PropTypes.object.isRequired,
};

export default StructuredData; 