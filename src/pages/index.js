import React from 'react';

import Layout from '../components/Layout/layout.component';
import SEO from '../components/seo';

// local components
import Hero from '../components/Hero/hero';
import WorkFrontEnd from '../components/Work/workFrontEnd';
import Contact from '../components/Contact/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <WorkFrontEnd />
    <Contact />
  </Layout>
);

export default IndexPage;
