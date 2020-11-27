import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';

import Github from '../../assets/github-brands.svg';

const ProjectLink = styled.a`
  min-width: 18em;
  height: 250px;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
`;

const ProjectsFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Projects = styled.div`
  display: grid;
  grid-gap: 2em;
  justify-items: center;
  background-color: yellow;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const WorkFrontEnd = () => {
  const data = useStaticQuery(graphql`
    fragment processProjectImage on File {
      childImageSharp {
        fluid(maxWidth: 325) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query {
      projectOne: file(relativePath: { eq: "portfolio-web.png" }) {
        ...processProjectImage
      }
      projectTwo: file(relativePath: { eq: "unhoused-humanity-web.png" }) {
        ...processProjectImage
      }
      projectThree: file(relativePath: { eq: "sleep-out-2019-web.png" }) {
        ...processProjectImage
      }
    }
  `);
  const projectDataOne = data.projectOne.childImageSharp.fluid;
  const projectDataTwo = data.projectTwo.childImageSharp.fluid;
  const projectDataThree = data.projectThree.childImageSharp.fluid;

  return (
    <div
      className="flex flex-col justify-center items-left mb-12"
      name="work-dev"
    >
      <span id="work-dev" className="scroll-anchor" />
      <section className="py-10 flex flex-col items-start bg-gray-1 px-responsive">
        <h1 className="text-gray-8 text-2xl sm-text-4xl font-bold span spanTitle">
          Front-End Web Development
        </h1>
        <p className="text-grey-6 text-left my-6 text-2xl-responsive leading-relaxed">
          A few websites I have designed and coded.
        </p>
        <ProjectsFlex>
          <ProjectLink
            target="_blank"
            href="https://github.com/Sasheem/Portfolio-Website"
          >
            <Img
              fluid={projectDataOne}
              alt="Portfolio Website"
              objectFit="fill"
              style={{
                height: '100%',
                width: '100%',
                // minWidth: '325px',
                borderRadius: 8,
              }}
            />
          </ProjectLink>
          <ProjectLink
            target="_blank"
            // href="https://musing-joliot-870301.netlify.app/"
            href="https://github.com/Sasheem/gatsby-unhoused-website"
          >
            <Img
              fluid={projectDataTwo}
              alt="Unhoused Humanity Website"
              objectFit="fill"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 10,
              }}
            />
          </ProjectLink>
          <ProjectLink target="_blank" href="https://sleepouttlh.org/">
            <Img
              fluid={projectDataThree}
              alt="Sleep Out 2019 Website"
              objectFit="fill"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 8,
              }}
            />
          </ProjectLink>
        </ProjectsFlex>
        <a
          className="flex github linksmart font-medium px-4 py-3 my-6 items-center justify-start rounded-lg cursor-pointer overflow-hidden"
          href="https://github.com/Sasheem"
          target="_blank"
        >
          <div className="mr-2" style={{ height: 21, width: 21 }}>
            <Github />
          </div>
          <p className="mx-2">Source code</p>
        </a>
      </section>
    </div>
  );
};

export default WorkFrontEnd;
