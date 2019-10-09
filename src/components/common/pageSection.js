import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 35em;
  flex-direction: row;
  background-color: green;
`

const PageSection = ({ children }) => <Container>{children}</Container>

export default PageSection
