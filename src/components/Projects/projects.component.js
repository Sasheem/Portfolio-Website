import React from 'react'

import '../../styles/global.scss'
import './projects.styles.scss'

import CardProject from '../CardProject/card-project.component'

const Projects = () => (
  <div className="container-flex-col">
    <h2>My recent projects</h2>
    <div className="container-projects">
      <CardProject
        image=""
        title="Sleep Out Tallahassee"
        description="Interface Design, Frontend Development, Wordpress Backend, UI/UX"
      />
      <span className="flex-space" />
      <CardProject
        image=""
        title="Unhoused Humanity"
        description="Interface Design, Frontend Development, Squarespace Backend, and 5 others"
      />
      <span className="flex-space" />
      <CardProject
        image=""
        title="Ecommerce Website"
        description="Frontend Development, React, Stripe API"
      />
    </div>
  </div>
)

export default Projects
