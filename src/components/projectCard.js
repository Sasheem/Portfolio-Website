import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import ImageProjectOne from '../components/imageProjectOne'
import ImageProjectTwo from '../components/imageProjectTwo'
import ImageProjectThree from '../components/imageProjectThree'

const Card = styled.div`
  flex: 1;
  background-color: lightblue;
`
const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5em;
`
const LinkContainer = styled.div`
  align-self: flex-end;
`

/**
 * todo add conditional rendering for diff project image
 * <ImageProjectTwo alt="project 2 thumbnail" />
 * <ImageProjectThree alt="project 3 thumbnail" />
 */

const ProjectCard = props => {
  const { number } = props

  return (
    <Card>
      <ImageProjectOne alt="project 1 thumbnail" />
      <CardDesc>
        <h4>Project {[number]}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          malesuada eget enim non feugiat.
        </p>
        <LinkContainer>
          <Link to="/projectDetail/">Project Details</Link>
        </LinkContainer>
      </CardDesc>
    </Card>
  )
}

export default ProjectCard
