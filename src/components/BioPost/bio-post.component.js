import React from 'react'

import PostImage from '../PostImage/post-image.component'

import './bio-post.styles.scss'

const BioPost = () => (
  <div className="container-bio">
    <div className="container-text">
      <p>date text - project type</p>
      <h1>Project title</h1>
      <p>Project description</p>
    </div>
    <div className="container-image">
      <PostImage />
    </div>
  </div>
)

export default BioPost
