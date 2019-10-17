import React from 'react'
import styled from 'styled-components'

const Group = styled.div`
  display: flex;
  flex-direction: column;
  wiidth: 100%;
`
const GroupRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`
const TitleRow = styled(GroupRow)`
  justify-content: flex-start;
`
const Title = styled.p`
  color: grey;
  font-weight: normal;
  font-size: 16px;
`
const Radio = styled.input``
const Label = styled.label`
  color: black;
  font-weight: normal;
  font-size: 12px;
`

const FormRadio = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <TitleRow>
      <Title>Choose services needed</Title>
    </TitleRow>
    <GroupRow></GroupRow>
  </Group>
)

export default FormRadio
