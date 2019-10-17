import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
  height: 50em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  text-align: center;
  /* background-color: red; */

  @media only screen and (min-width: 600px) {
    padding: 6em 6em 0 6em;
    text-align: left;
  }
`

const ContainerContent = ({ children }) => <Content>{children}</Content>

export default ContainerContent
