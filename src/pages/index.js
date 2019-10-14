import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import ImageProjectOne from '../components/imageProjectOne'
import ImageProjectTwo from '../components/imageProjectTwo'
import ImageProjectThree from '../components/imageProjectThree'
import ContainerContent from '../components/containerContent'
import ProjectsContainer from '../components/projectsContainer'
import ContainerBio from '../components/containerBio'
import ProjectsDeck from '../components/projectsDeck'
import PageSection from '../components/pageSection'
import SEO from '../components/seo'

const ProjectCard = styled.div`
  flex: 1;
`

const Fill = styled.div`
  flex: 0.15;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection>
      <ContainerBio>
        <h1>Hi I'm Sasheem</h1>
        <p>
          I design, and develop front end websites. <br />
          Let me take your business to it's next level with an online presence
          today.
        </p>
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
      </ContainerContent>
      <ContainerContent>
        <div style={{ backgroundColor: 'yellow' }}>
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
          <ProjectCard>
            <ImageProjectOne alt="project one thumbnail" />
            <h4>Project 1</h4>
          </ProjectCard>
          <Fill />
          <ProjectCard>
            <ImageProjectTwo alt="project two thumbnail" />
            <h4>Project 2</h4>
          </ProjectCard>
          <Fill />
          <ProjectCard>
            <ImageProjectThree alt="project 3 thumbnail" />
            <h4>Project 3</h4>
          </ProjectCard>
        </ProjectsDeck>
      </ProjectsContainer>
    </PageSection>
    <PageSection>
      <ContainerContent>
        <h2>Get in touch</h2>
        <p>Build contact form</p>
      </ContainerContent>
    </PageSection>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
