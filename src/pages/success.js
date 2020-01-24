import React from 'react'

import Layout from '../components/Layout/layout.component'
import SEO from '../components/seo'

const SuccessContactProject = () => (
  <Layout>
    <SEO title="Successful Contact Project" />
    <div className="sub-container">
      <h2>Message successfully sent!</h2>
      <p>
        Thank you for reaching out to me. I will get back to you within the next
        48 hours.
      </p>
    </div>
  </Layout>
)

export default SuccessContactProject
