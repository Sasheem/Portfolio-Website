import React from 'react'

import './post-details.styles.scss'

import IconBullet from '../../assets/minus.svg'

const PostDetails = () => (
  <div className="component-container">
    <div className="layout-spacing" />
    <div className="details-row">
      <div className="details-pair">
        <div className="details-list">
          <ul>
            <lh>Client</lh>
            <li>Unhoused Humanity</li>
          </ul>
        </div>
        <div className="details-list">
          <ul>
            <lh>Services</lh>
            <li>
              <IconBullet className="icon" />
              Interface Design
            </li>
            <li>
              <IconBullet className="icon" />
              Branding
            </li>
            <li>
              <IconBullet className="icon" />
              Web Dev
            </li>
            <li>
              <IconBullet className="icon" />
              SEO
            </li>
          </ul>
        </div>
      </div>
      <div className="details-pair">
        <div className="details-list">
          <ul>
            <lh>Deliverables</lh>
            <li>
              <IconBullet className="icon" />
              Website
            </li>
            <li>
              <IconBullet className="icon" />
              Illustrations
            </li>
            <li>
              <IconBullet className="icon" />
              Logo
            </li>
          </ul>
        </div>
        <div className="details-list">
          <ul>
            <lh>Links</lh>
            <li>
              <IconBullet className="icon" />
              Website
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="layout-spacing" />
  </div>
)

export default PostDetails
