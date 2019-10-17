import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Button, Container } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
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
const ButtonsContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection>
      <ContainerBio>
        <h1>Hi I'm Sasheem</h1>
        <p>I'm a freelance web developer based out of Tallahassee, Florida.</p>
        <ButtonsContainer>
          <ButtonComponent inverted={false}>My Work</ButtonComponent>
          <ButtonComponent inverted={true}>Hire Me</ButtonComponent>
        </ButtonsContainer>
      </ContainerBio>
      <ContainerBio>
        <div
          style={{
            width: `300px`,
            maxHeight: `400px`,
            // marginBottom: `1.45rem`,
            backgroundColor: 'yellow',
          }}
        >
          <Image />
        </div>
      </ContainerBio>
    </PageSection>
    <PageSection>
      <ContainerContent>
        <h2>My Services</h2>
        <ul>
          <li>Responsive Website Design</li>
          <li>Website Development with React</li>
          <li>Website Development with CMS</li>
          <li>Branding and Logo Design</li>
          <li>Website Domain and SEO</li>
          <li>IT and Web Consultation</li>
        </ul>
      </ContainerContent>
      <ContainerContent>
        <h2>About Me</h2>
        <p>
          I'm a full stack freelance web developer and UI/UX designer
          specializing in responsive web development, modern CSS techniques, and
          logo/branding. I work with clients to create user interfaces and
          branding that excel their business goals.
          <br />
          <br />
          Whether you need an online E-Commerce website or a simple blog, I will
          guide you through the steps needed to be a dominant force in your
          industry. In my off time I am taking care of my dog Gilby (German
          Shepard Lab mix), maintaining the website for a nonprofit organization
          Unhoused Humanity, or working on developing mobile apps for fun.
          <br />
          <br />
          Check out my work below and shoot me a quick message about your
          project!
        </p>
      </ContainerContent>
    </PageSection>
    <PageSection>
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
    </PageSection>
    <PageSection>
      <ContainerContact>
        <FormHome />
      </ContainerContact>
    </PageSection>
  </Layout>
)

export default IndexPage
