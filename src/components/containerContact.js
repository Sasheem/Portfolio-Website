import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  text-align: center;

  @media only screen and (min-width: 600px) {
    padding: 6em 6em 0 6em;
    text-align: left;
  }
`

const ContainerContact = ({ children }) => <Content>{children}</Content>

export default ContainerContact
