import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout.component'
import SEO from '../components/seo'

const Blog = () => (
  <Layout>
    <SEO title="Blog page" />
    <div className="sub-container">
      <h1>Blog page</h1>
      <p>detail out my Blog here</p>
    </div>
  </Layout>
)

export default Blog
