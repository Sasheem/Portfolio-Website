import React from 'react'

import '../../styles/global.scss'
import './services.styles.scss'

// local icon svg
import IconDev from '../../assets/code.svg'
import IconDes from '../../assets/layout.svg'
import IconBrand from '../../assets/pen-tool.svg'
import IconDomain from '../../assets/monitor.svg'
import IconContent from '../../assets/layers.svg'
import IconConsult from '../../assets/coffee.svg'

const Services = () => (
  <div className="container-flex-col">
    <h2>Services</h2>
    <div className="container-col-3 row-service">
      <div className="card-service">
        <div className="container-icon">
          <IconDev />
        </div>
        <div className="container-text">
          <h4>Web Development</h4>
          <p>Front end web development with HTML5, CSS3, and Javascript</p>
        </div>
      </div>
      <div className="card-service">
        <div className="container-icon">
          <IconDes />
        </div>
        <div className="container-text">
          <h4>Responsive Web Design</h4>
          <p>Mobile first driven design for maximum audience support</p>
        </div>
      </div>
      <div className="card-service">
        <div className="container-icon">
          <IconBrand />
        </div>
        <div className="container-text">
          <h4>Branding Design</h4>
          <p>Logos, icons, typography and colors to reflect business values</p>
        </div>
      </div>
    </div>
    <div className="container-col-3 row-service">
      <div className="card-service">
        <div className="container-icon">
          <IconDomain />
        </div>
        <div className="container-text">
          <h4>Domain and SEO</h4>
          <p>
            Website domain paired with modern SEO techniques to improve your
            google rankings
          </p>
        </div>
      </div>
      <div className="card-service">
        <div className="container-icon">
          <IconContent />
        </div>
        <div className="container-text">
          <h4>Content Management</h4>
          <p>Web development or headless CMS development</p>
        </div>
      </div>
      <div className="card-service">
        <div className="container-icon">
          <IconConsult />
        </div>
        <div className="container-text">
          <h4>Consultations</h4>
          <p>Meet me for a cup of coffee to discuss your future project</p>
        </div>
      </div>
    </div>
  </div>
)

export default Services
