import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const ProjectsDeck = ({ children }) => <Row>{children}</Row>

export default ProjectsDeck
