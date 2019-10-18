import React from 'react'
import styled from 'styled-components'

const BioButton = styled.button`
  /* background-color: rgb(44, 106, 167); */
  background-color: #3e4cae;
  color: white;
  border-radius: 0.3em;
  padding: 0.3em 0.5em;
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 1120px) {
    margin-right: 2em;
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
