import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Button, Container } from 'semantic-ui-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import ContainerContent from '../components/containerContent'
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
      <ContainerContent>
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
      </ContainerContent>
    </PageSection>
    <PageSection>
      <ContainerContent>
        <div>
          <h2>My Services</h2>
          <ul>
            <li>Responsive Website Design</li>
            <li>Website Development with React</li>
            <li>Website Development with CMS</li>
            <li>Branding and Logo Design</li>
            <li>Website Domain and SEO</li>
            <li>IT and Web Consultation</li>
          </ul>
        </div>
      </ContainerContent>
      <ContainerContent>
        <div>
          <h2>About Me</h2>
          <p>
            I am a bartender/manager by day, freelance web developer by night,
            and this is my website. I also maintain the website for Unhoused
            Humanity, a nonprofit organization that works to house individuals
            and families experiencing homelessness. When I am not creating
            content, I like to bring my dog (German Shepard Lab mix) to the
            park.
            <br />
            <br />I specialize in Front End Web Development using HTML5, CSS3,
            and Javascrip (React). In addition, I enjoy creating websites using
            WordPress. Let me build your online presence today!
          </p>
        </div>
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
      <ContainerContent>
        <FormHome />
      </ContainerContent>
    </PageSection>
  </Layout>
)

export default IndexPage
