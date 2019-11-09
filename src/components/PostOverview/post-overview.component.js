import React from 'react'

import './post-overview.styles.scss'

const PostOverview = ({ text }) => (
  <div className="container-overview">
    <div className="layout-spacing" />
    <div className="overview-content">
      <h4>Overview</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus
        augue at sem placerat, et molestie nibh aliquam. Cras vel velit at augue
        euismod vestibulum non a nunc. Etiam a leo in sem aliquam semper. Cras
        at tincidunt elit. Proin convallis auctor nunc, id pharetra neque.
      </p>
    </div>
    <div className="layout-spacing" />
  </div>
)

export default PostOverview
