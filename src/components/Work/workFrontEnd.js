import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';

import Github from '../../assets/github-brands.svg';

const ProjectLink = styled.a`
  min-width: 20rem;
  height: 250px;
  border-radius: 0.5rem;

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.8;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const StyledImg = styled(Img)`
  object-fit: fill;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
`;

const WorkFrontEnd = () => {
  const data = useStaticQuery(graphql`
    query MyProjectsQuery {
      allFile(
        filter: {
          ext: { regex: "/(png)/" }
          relativeDirectory: { eq: "projects" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 400) {
                aspectRatio
                base64
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);
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
        <ProjectGrid>
          {data.allFile.edges.map(({ node }) => (
            <ProjectLink target="_blank">
              <Img
                fixed={node.childImageSharp.fixed}
                alt={node.base.split('.')[0]}
                objectFit="fill"
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 8,
                }}
              />
            </ProjectLink>
          ))}
        </ProjectGrid>
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
