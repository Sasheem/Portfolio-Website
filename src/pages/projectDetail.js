import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const ProjectDetail = ({ children }) => (
  <Layout>
    <SEO title="Project detail page" />
    <Container>
      <h1>Project Name</h1>
      <p>Design and development process of project will go here</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default ProjectDetail
