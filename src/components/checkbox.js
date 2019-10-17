import React from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide checkbox visually but remain accessible to screen readers. */
  /* Source: https://polished.js.org/docs/#hidevisually */
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props =>
    props.checked ? 'rgb(44, 106, 167)' : 'rgba(44, 106, 167, 0.2)'};
  border-radius: 3px;
  transition: all 150ms;

  /* To add custom styles when native checkbox is focused
    reference to HiddenCheckbox component and apply styles
    when it is focused */
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(44, 106, 167, 0.7);
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`
const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-right: 0.5em;
`
const CheckBox = ({ className, checked, ...props }) => (
  <Container className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </Container>
)

export default CheckBox
