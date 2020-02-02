/**
 * todo apply transition of label upon hover with styled components
 * * installed sass for now
 *
 * * input type for website is text, url is not working for me
 */

import React from 'react'
import styled from 'styled-components'

import FormInput from '../components/FormInput/form-input.component'
import CheckBox from '../components/checkbox'
import ButtonComponent from '../components/common/ButtonComponent'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5em auto;
  text-align: center;

  @media only screen and (min-width: 600px) {
    width: 35vw;
  }
`
const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const GroupSubmit = styled(Group)`
  align-items: flex-end;
`
const TitleRow = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 0.3em;
`
const ContentRow = styled.div`
  flex: 4;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1120px) {
    flex-direction: row;
  }
`
const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const CheckboxRow = styled(ContentColumn)`
  flex-direction: row;
  justify-content: flex-start;
`
const Title = styled.p`
  color: grey;
  font-weight: normal;
  font-size: 18px;
  text-align: left;
`
const Label = styled.label`
  color: black;
  font-weight: normal;
  font-size: 16px;
`

class FormHome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      company: '',
      website: '',
      description: '',
      designChecked: false,
      devWordpressChecked: false,
      devReactChecked: false,
      brandingChecked: false,
      domainChecked: false,
      contentChecked: false,
      consultationChecked: false,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleCheckboxChange = event => {
    const { name, checked } = event.target
    this.setState({ [name]: checked })
  }

  handleSubmit = () => {
    console.log(`form submitted`)
  }

  render() {
    const {
      fullName,
      email,
      website,
      company,
      description,
      designChecked,
      devWordpressChecked,
      devReactChecked,
      brandingChecked,
      domainChecked,
      contentChecked,
      consultationChecked,
    } = this.state
    return (
      <Container>
        <h2>Get in touch</h2>
        <span>Tell me about your project</span>
        <form
          // onSubmit={this.handleSubmit}
          id="contact-home-web-project"
          name="contact-home-web-project"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input
            type="hidden"
            name="form-name"
            value="contact-home-web-project"
          />
          <FormInput
            name="fullName"
            type="text"
            value={fullName}
            label="Full Name"
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
            name="company"
            type="text"
            value={company}
            label="Company / Organization"
            onChange={this.handleChange}
          />
          <FormInput
            name="website"
            type="text"
            value={website}
            label="Website (if applicable)"
            onChange={this.handleChange}
          />
          <Group>
            <TitleRow>
              <Title>Choose services needed</Title>
            </TitleRow>
            <ContentRow>
              <ContentColumn>
                <CheckboxRow>
                  <Label>
                    <CheckBox
                      name="designChecked"
                      checked={designChecked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Web Design</span>
                  </Label>
                </CheckboxRow>
                <CheckboxRow>
                  <Label>
                    <CheckBox
                      name="devWordpressChecked"
                      checked={devWordpressChecked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Web Development (WordPress)</span>
                  </Label>
                </CheckboxRow>
                <CheckboxRow>
                  <Label>
                    <CheckBox
                      name="devReactChecked"
                      checked={devReactChecked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Web Development (React)</span>
                  </Label>
                </CheckboxRow>
              </ContentColumn>
              <ContentColumn>
                <CheckboxRow>
                  <Label>
                    <CheckBox
                      name="brandingChecked"
                      checked={brandingChecked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Branding</span>
                  </Label>
                </CheckboxRow>
                <CheckboxRow>
                  <Label>
                    <CheckBox
                      name="domainChecked"
                      checked={domainChecked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Domain / SEO</span>
                  </Label>
                </CheckboxRow>
                <CheckboxRow>
                  <Label>
                    <CheckBox
                      name="contentChecked"
                      checked={contentChecked}
                      onChange={this.handleCheckboxChange}
                    />
                    <span>Content Management System</span>
                  </Label>
                </CheckboxRow>
              </ContentColumn>
            </ContentRow>
          </Group>
          <FormInput
            name="description"
            type="text"
            value={description}
            label="Tell me about your project"
            onChange={this.handleChange}
          />
          <div data-netlify-recaptcha="true"></div>
          <GroupSubmit>
            <ButtonComponent type="submit">Submit</ButtonComponent>
          </GroupSubmit>
        </form>
      </Container>
    )
  }
}

export default FormHome
