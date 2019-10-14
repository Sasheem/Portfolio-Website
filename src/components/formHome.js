/**
 * todo apply transition of label upon hover with styled components
 * * installed sass for now
 *
 * * input type for website is text, url is not working for me
 */

import React from 'react'
import styled from 'styled-components'

import FormInput from '../components/FormInput/form-input.component'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30em;
  margin: 5em auto;
  text-align: center;
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
      website: '',
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
    const {
      firstName,
      lastName,
      email,
      phone,
      budget,
      website,
      description,
    } = this.state
    return (
      <Container>
        <h2>Get in touch</h2>
        <span>Tell me about your project</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="firstName"
            type="text"
            value={firstName}
            label="First Name"
            onChange={this.handleChange}
          />
          <FormInput
            name="lastName"
            type="text"
            value={lastName}
            label="Last Name"
            onChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
          />
          <FormInput
            name="phone"
            type="tel"
            value={phone}
            label="Phone Number"
            onChange={this.handleChange}
          />
          <FormInput
            name="budget"
            type="number"
            value={budget}
            label="Budget for project"
            onChange={this.handleChange}
          />
          <FormInput
            name="website"
            type="text"
            value={website}
            label="Current Website"
            onChange={this.handleChange}
          />
          <FormInput
            name="description"
            type="text"
            value={description}
            label="Describe your project or idea"
            onChange={this.handleChange}
          />
        </form>
      </Container>
    )
  }
}

export default FormHome
