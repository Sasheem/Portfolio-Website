import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 3em;
  text-align: center;

  @media only screen and (min-width: 600px) {
    padding: 0em 6em;
    height: 30em;
    text-align: left;
  }
`

const ProjectsContainer = ({ children }) => <Content>{children}</Content>

export default ProjectsContainer
