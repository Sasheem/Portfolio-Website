import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import ContentContainer from '../components/common/contentContainer'
import PageSection from '../components/common/pageSection'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection>
      <ContentContainer>
        <div style={{ backgroundColor: 'yellow' }}>
          <h1>Hi I'm Sasheem</h1>
          <p>I design, and develop front end websites.</p>
          <p>
            Let me take your business to it's next level with an online presence
            today.
          </p>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </ContentContainer>
    </PageSection>
    <PageSection>
      <ContentContainer>
        <div style={{ backgroundColor: 'yellow' }}>
          <h2>My Services</h2>
          <ul>
            <li>Responsive Website Design</li>
            <li>Website Development</li>
            <li>Branding and Logo Design</li>
            <li>Website domain set up</li>
            <li>Search Engine Optimization</li>
            <li>Website Development Consultation</li>
          </ul>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div style={{ backgroundColor: 'yellow' }}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
            sagittis mauris, in euismod nibh. Aliquam erat volutpat. Vivamus ut
            felis auctor velit finibus dapibus. Nunc sed arcu pulvinar,
            fermentum mauris convallis, accumsan dui. Curabitur vulputate
            eleifend scelerisque.
          </p>
        </div>
      </ContentContainer>
    </PageSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
