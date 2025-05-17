/** @format */

import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | TMN Media</title>
        <meta
          name="description"
          content="Read TMN Media's privacy policy to understand how we collect, use, and protect your personal information when you visit our website or use our services."
        />
        <link rel="canonical" href="https://www.tmn-media.com/privacy-policy" />
      </Helmet>

      <div className="container mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold text-primary-100 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">Last Updated: 19th April 2025</p>

        <p className="text-gray-700 mb-4">
          TMN Media (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
          your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website www.tmn-media.com (the &quot;Site&quot;).
          Please read this privacy policy carefully. If you do not agree with the terms of this
          privacy policy, please do not access the site.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Collection of Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect information about you in a variety of ways. The information we may collect
          on the Site includes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>
            Personal Data: Personally identifiable information, such as your name, email address,
            and telephone number, that you voluntarily give to us when you use our contact forms or
            schedule a call via Calendly.
          </li>
          <li>
            Derivative Data: Information our servers automatically collect when you access the Site,
            such as your IP address, browser type, operating system, access times, and the pages you
            have viewed directly before and after accessing the Site.
          </li>
          {/* Add more types if applicable (e.g., cookies, mobile data) */}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Use of Your Information</h2>
        <p className="text-gray-700 mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient,
          and customized experience. Specifically, we may use information collected about you via
          the Site to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Respond to your inquiries and fulfill your requests.</li>
          <li>
            Send you administrative information, such as changes to our terms, conditions, and
            policies.
          </li>
          <li>Improve the operation of the Site and our service offerings.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          {/* Add more uses if applicable */}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Disclosure of Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We may share information we have collected about you in certain situations. Your
          information may be disclosed as follows:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>
            By Law or to Protect Rights: If we believe the release of information about you is
            necessary to respond to legal process, to investigate or remedy potential violations of
            our policies, or to protect the rights, property, and safety of others, we may share
            your information as permitted or required by any applicable law, rule, or regulation.
          </li>
          <li>
            Third-Party Service Providers: We may share your information with third parties that
            perform services for us or on our behalf, including data analysis, email delivery,
            hosting services, customer service, and marketing assistance (e.g., Calendly for
            scheduling).
          </li>
          {/* Add more disclosures if applicable */}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Security of Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use administrative, technical, and physical security measures to help protect your
          personal information. While we have taken reasonable steps to secure the personal
          information you provide to us, please be aware that despite our efforts, no security
          measures are perfect or impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Policy for Children</h2>
        <p className="text-gray-700 mb-4">
          We do not knowingly solicit information from or market to children under the age of 13. If
          you become aware of any data we have collected from children under age 13, please contact
          us using the contact information provided below.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have questions or comments about this Privacy Policy, please contact us at:
          contact@tmn-media.com
        </p>

        <p className="text-sm text-gray-500 mt-8">
          [Disclaimer: This is a template and not legal advice. Consult with a legal professional to
          ensure compliance.]
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
