import React from 'react'
import { Link } from 'gatsby'

import '../../styles/global.scss'
import './bio.styles.scss'

import Image from '../image'

const Bio = () => (
  <div className="page-section">
    <div className="content">
      <h1>Hi I'm Sasheem</h1>
      <p>I'm a freelance web developer based out of Tallahassee, Florida.</p>
    </div>
    <div className="content-image">
      <div className="container-image">
        <Image />
      </div>
    </div>
  </div>
)

export default Bio
