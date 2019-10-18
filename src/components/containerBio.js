import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
  height: 40em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  text-align: center;

  @media only screen and (max-width: 1120px) {
    margin: 4vh 0;
  }

  @media only screen and (min-width: 1120px) {
    padding: 10em 6em 0 6em;
    text-align: left;
  }
`

const ContainerBio = ({ children }) => <Content>{children}</Content>

export default ContainerBio
