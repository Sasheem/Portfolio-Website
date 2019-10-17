import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const BioButton = styled(Button)`
  /* background-color: rgb(44, 106, 167); */
  background-color: #3e4cae;
  color: white;
  border-radius: 0.3em;
  padding: 0.3em 0.5em;
  border: none;
  margin-right: 2em;

  &:hover {
    cursor: pointer;
  }
`

const InvertedBioButton = styled(BioButton)`
  background-color: white;
  border: 2px solid #3e4cae;
  color: #3e4cae;
`

const ButtonComponent = ({ children, inverted, ...props }) => (
  <div>
    {inverted ? (
      <InvertedBioButton>{children}</InvertedBioButton>
    ) : (
      <BioButton>{children}</BioButton>
    )}
  </div>
)

export default ButtonComponent
