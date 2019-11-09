import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import Layout from '../components/layout'
import Layout from '../components/Layout/layout.component'
import SEO from '../components/seo'
import BioPost from '../components/BioPost/bio-post.component'
import PostOverview from '../components/PostOverview/post-overview.component'
import PostDetails from '../components/PostDetails/post-details.component'

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Post = ({ children }) => (
  <Layout>
    <SEO title="Blog post" />
    <div className="sub-layout">
      <div className="layout-spacing" />
      <div className="layout-content">
        <div className="content-section">
          <BioPost />
        </div>
        <div className="content-section">
          <PostOverview />
        </div>
        <div className="content-section">
          <PostDetails />
        </div>
        <div className="content-section">
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
      <div className="layout-spacing" />
    </div>
  </Layout>
)

export default Post
