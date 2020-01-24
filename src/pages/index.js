import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout/layout.component'
import SEO from '../components/seo'
import Image from '../components/image'

// local components
import Bio from '../components/Bio/bio.component'
import Services from '../components/Services/services.component'
import Projects from '../components/Projects/projects.component'

import ContainerContent from '../components/containerContent'
import ContainerContact from '../components/containerContact'
import ProjectsContainer from '../components/projectsContainer'
import ContainerBio from '../components/containerBio'
import ProjectCard from '../components/projectCard'
import ProjectsDeck from '../components/projectsDeck'
import PageSection from '../components/pageSection'
import FormHome from '../components/formHome'
import ButtonComponent from '../components/common/ButtonComponent'

const Fill = styled.div`
  flex: 0.15;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1em;

  @media only screen and (min-width: 1120px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <Services />
    {/* <Projects /> */}
    {/* <PageSection>
      <ProjectsContainer>
        <h2>Projects</h2>
        <ProjectsDeck>
          <ProjectCard number="1" />
          <Fill />
          <ProjectCard number="2" />
          <Fill />
          <ProjectCard number="3" />
        </ProjectsDeck>
      </ProjectsContainer>
    </PageSection> */}
    <PageSection>
      <ContainerContact>
        <FormHome />
      </ContainerContact>
    </PageSection>
  </Layout>
)

export default IndexPage
