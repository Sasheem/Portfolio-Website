import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import Layout from '../components/layout'
import Layout from '../components/Layout/layout.component'
import SEO from '../components/seo'

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
    <div className="sub-container">
      <h1>Post name</h1>
      <p>blog post content goes here</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Post
