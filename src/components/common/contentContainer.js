import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
  height: 35em;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6em;
  background-color: purple;
`

const ContentContainer = ({ children }) => <Content>{children}</Content>

export default ContentContainer
