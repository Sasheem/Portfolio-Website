import React from 'react'

import './card-project.styles.scss'

import ImageProject from '../ImageProject/image-project.component'

const CardProject = ({ image, title, description }) => (
  <div className="container-card">
    {/* <ImageProject alt="project image" /> */}
    <div className="card-image" />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
)

export default CardProject
