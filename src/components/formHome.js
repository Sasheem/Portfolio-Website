import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

class FormHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      budget: '',
      url: '',
      description: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container>
        <h2>Get in touch</h2>
        <span>Tell me about your project</span>
        <form onSubmit={this.handleSubmit}></form>
      </Container>
    )
  }
}
