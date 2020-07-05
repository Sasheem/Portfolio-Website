import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

import { FirebaseContext } from '../Firebase';
import MailIcon from '../../assets/mail-icon.svg';
import SelectArrow from '../../assets/chevron-down-solid-light.svg';
import TwitterIcon from '../../assets/twitter-brands.svg';
import InstagramIcon from '../../assets/instagram-brands.svg';
import LinkedInIcon from '../../assets/linkedin-brands.svg';

import './contact.scss';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  color: #edf2f7;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5em;
  line-height: 1.25;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: #4a5568;
  background-color: #2d3748;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    border-color: #718096;
    outline: 0;
  }
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  color: #edf2f7;
  padding-right: 2rem;
  padding-left: 1rem;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  line-height: 1.25;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: #4a5568;
  background-color: #2d3748;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const SelectContainer = styled.div`
  position: relative;
`;

const SocialSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media only screen and (min-width: 1024px) {
    padding-right: 6rem;
  }
  @media only screen and (min-width: 640px) {
    padding-right: 3rem;
  }
`;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: rgba(1, 22, 56, 1);
  border-radius: 0.5rem;

  @media only screen and (min-width: 1280px) {
    padding: 4rem;
    max-width: 36rem;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
  @media only screen and (min-width: 640px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6rem;
  padding-right: 6rem;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 375px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Contact = () => {
  const { firebase = null } = useContext(FirebaseContext) || {};
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const recaptchaRef = useRef();
  // set state when input changes
  function handleInputChange(ev) {
    ev.persist();
    setErrorMessage('');
    setFormValues(currentValues => ({
      ...currentValues,
      [ev.target.name]: ev.target.value,
    }));
  }

  // save message to firebase & send myself an email
  const handleSubmit = async ev => {
    ev.preventDefault();
    const token = await recaptchaRef.current.getValue();
    console.log(`token: ${typeof token}`);
    console.dir(token);
    const { name, email, category, message } = formValues;
    console.log(
      `name: ${name} \n email: ${email} \n category: ${category} \n message: ${message}`
    );

    try {
      if (firebase) {
        setIsProcessing(true);
        const result = await firebase.createMessage({
          name,
          email,
          category,
          message,
        });
        console.log(`message result: ${typeof result}`);
        console.dir(result);
        setFormValues({
          name: '',
          email: '',
          category: 'select',
          message: '',
        });
        setIsProcessing(false);
        setIsSuccess(true);
      }
    } catch (error) {
      setIsProcessing(false);
      setIsSuccess(false);
      setErrorMessage(`Failed to send: ${error.message}`);
    }
  };

  function onChange(value) {
    console.log(`Captcha value: ${value}`);
  }

  return (
    <ContactContainer
      // className="flex justify-between px-responsive"
      name="contact"
    >
      <span id="contact" className="scroll-anchor" />
      <SocialSection>
        <h1 className="text-grey-8 text-responsive font-bold span spanTitle">
          Links
        </h1>
        <p className="text-left text-grey-6 leading-relaxed mt-responsive my-6 text-2xl-responsive">
          These are all the ways you can follow my work and network with me.{' '}
        </p>
        <div className="flex flex-col items-start justify-between">
          <a
            className="twitter linksmart rounded-lg px-3 mb-4 py-2 inline-flex font-medium tracking-wider items-center cursor-pointer justify-start"
            target="_blank"
            href="https://twitter.com/sasheemdev"
          >
            <div className="mr-2 pointer-events-none">
              <TwitterIcon />
            </div>
            <p className="pointer-events-none">
              <span className="transparency-md">@</span>sasheemdev
            </p>
          </a>
          {/* <a className="instagram linksmart rounded-lg px-3 mb-4 py-2 inline-flex font-medium tracking-wider items-center cursor-pointer justify-start">
            <div className="mr-2 pointer-events-none">
              <InstagramIcon />
            </div>
            <p className="pointer-events-none">
              <span className="transparency-md">@</span>sasheem_
            </p>
          </a> */}
          <a
            className="linkedin linksmart rounded-lg px-3 mb-4 py-2 inline-flex font-medium tracking-wider items-center cursor-pointer justify-start"
            target="_blank"
            href="https://www.linkedin.com/in/sasheem/"
          >
            <div className="mr-2 pointer-events-none">
              <LinkedInIcon />
            </div>
            <p className="pointer-events-none">
              <span className="transparency-md">@</span>sasheemsnell
            </p>
          </a>
        </div>
        <p className="text-grey-6 text-left my-6 text-2xl-responsive leading-relaxed">
          Looking for advice? Want to talk about tech? Shoot me an e-mail!
        </p>
        <a
          className="linksmart rounded-lg px-4 py-3 font-medium cursor-pointer inline-flex items-center justify-start mail"
          target="_blank"
          href="mailto:sasheem@sasheemdev.com"
        >
          <div className="mr-2">
            <MailIcon />
          </div>
          <p>
            hello<span className="transparent-md">@</span>sasheemdev.com
          </p>
        </a>
      </SocialSection>
      <ContactSection>
        <h1 className="text-grey-4 font-bold text-responsive span spanTitle">
          Let's work together
        </h1>
        <p className="text-grey-4 text-left mt-responsive my-6 leading-relaxed text-2xl-responsive">
          Have an idea for a website? Contact me through this form!
        </p>
        <div>
          <form className="w-full min-w-full" onSubmit={handleSubmit}>
            <div className="flex justify-start flex-wrap mb-6">
              <div className="w-responsive pr-2 p-mobile">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-grey-2 text-xs font-bold mb-2"
                >
                  Name
                </label>
                <StyledInput
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  value={formValues.name}
                  required
                />
              </div>
              <div className="w-responsive px-2 p-mobile">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-grey-2 text-xs font-bold mb-2"
                >
                  E-Mail
                </label>
                <StyledInput
                  name="email"
                  type="email"
                  placeholder="Enter your e-mail address"
                  onChange={handleInputChange}
                  value={formValues.email}
                  required
                />
              </div>
              <div className="w-responsive pl-2 p-mobile">
                <label
                  htmlFor="category"
                  className="block uppercase tracking-wide text-grey-2 text-xs font-bold mb-2"
                >
                  Category
                </label>
                <SelectContainer>
                  <StyledSelect
                    name="category"
                    onChange={handleInputChange}
                    value={formValues.category}
                  >
                    <option value="select">Select a category</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="design+development">
                      Design + Development
                    </option>
                  </StyledSelect>
                  <div className="text-grey-2 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <SelectArrow className="fill-current h-4 w-4" />
                  </div>
                </SelectContainer>
              </div>
            </div>
            <div className="flex flex-wrap mb-6">
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-grey-2 text-xs font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter message"
                  rows="8"
                  className="appearance-none block w-full bg-grey-8 text-grey-2 border border-grey-7 rounded py-3 px-4 mb-3 leading-tight rounded-md"
                  onChange={handleInputChange}
                  value={formValues.message}
                ></textarea>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="rounded-lg text-grey-8 cursor-pointer transparency-md bg-white font-semibold px-5 py-3 px-form-responsive py-form-responsive"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Send Message'}
              </button>
            </div>
            <div className="py-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.GATSBY_SITE_KEY}
                onChange={onChange}
                size="normal"
              />
            </div>
            {!!isSuccess && (
              <div className="success-message">Message sent!</div>
            )}
            {!!errorMessage && (
              <div className="error-message">Error: {errorMessage}</div>
            )}
          </form>
        </div>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
