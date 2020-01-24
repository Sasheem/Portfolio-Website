import React from 'react'

import './card-project.styles.scss'

import ImageProject from '../ImageProject/image-project.component'

const CardProject = ({ image, title, description }) => (
  <div className="container-card">
    <div className="card-image-container">
      <ImageProject alt="project image" image={image} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
)

export default CardProject
