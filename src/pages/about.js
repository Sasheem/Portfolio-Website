import React from 'react'
import { Link } from 'gatsby'

// import Layout from '../components/layout'
import Layout from '../components/Layout/layout.component'

import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About page" />
    <div className="sub-container">
      <h1>About me</h1>
      <p>
        I'm a full stack freelance web developer and UI/UX designer specializing
        in responsive web development, modern CSS techniques, and logo/branding.
        I work with clients to create user interfaces and branding that excel
        their business goals.
        <br />
        <br />
        Whether you need an online E-Commerce website or a simple blog, I will
        guide you through the steps needed to be a dominant force in your
        industry. In my off time I am taking care of my dog Gilby (German
        Shepard Lab mix), maintaining the website for a nonprofit organization
        Unhoused Humanity, or working on developing mobile apps for fun.
        <br />
        <br />
        Check out my work below and shoot me a quick message about your project!
      </p>
      <Link to="/">Go to home</Link>
    </div>
  </Layout>
)

export default SecondPage
