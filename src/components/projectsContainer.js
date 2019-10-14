import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  height: 40em;
  padding: 0 3em;
  text-align: center;

  @media only screen and (min-width: 600px) {
    padding: 6em 6em 0 6em;
    height: 30em;
    text-align: left;
  }
`

const ProjectsContainer = ({ children }) => <Content>{children}</Content>

export default ProjectsContainer
