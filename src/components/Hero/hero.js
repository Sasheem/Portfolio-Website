import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import ArrowIcon from '../../assets/chevron-down-solid.svg';

const BioText = styled.p`
  text-align: left;
  max-width: 25em;
`;
const BackgroundImage = styled.div`
  /* background-image: url(/static/wall-94ae259ac696d3df8371d8c6ddf0c683.png); */
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
`;

const Hero = () => {
  const handleArrowClick = () => {
    scrollTo('#work-dev');
  };
  return (
    <div
      className="flex willchange z-0 flex-col left-0 w-full items-start justify-center bg-white mb-12"
      name="hero"
      id="hero"
    >
      <div className="w-full h-full pb-hero pt-hero px-responsive">
        <div className="text-left mt flex flex-col  text-lg my-6 leading-relaxed">
          <div className="flex flex-col items-start" style={{ zIndex: 1 }}>
            <div className="first-div willchange">
              <p className="tracking-wide text-left text-xl text-grey-5 text-2xl">
                Hello! My name is
                <br />
              </p>
              <p className="text-left font-bold text-2xl text-4xl text-grey-8">
                Sasheem Snell
                <br />
              </p>
              <p className="text-left tracking-wide text-grey-5 text-xl text-2xl">
                (aka{' '}
                <span className="text-grey-8 span font-medium">SasheemDev</span>
                )
              </p>
            </div>
            <div className="second-div willchange">
              <BioText className="mt-6 text-xl max-w-29 text-2xl text-grey-8">
                I am a{' '}
                <span className="span font-medium">
                  Front-End Web Developer
                </span>{' '}
                {/* & <span className="span font-medium">UI | UX Designer</span>{' '} */}
                based near Tallahassee, Florida.
                <br />
                <br />I build mobile responsive websites with React and provide
                the competitive online presence that your business needs.
              </BioText>
            </div>
          </div>
          <h1 className="text-left text-grey-8 text-lg mb-6"></h1>
        </div>
        <div className="flex items-center w-full justify-between">
          <div
            className="circle simplelink cursor-pointer p-responsive"
            onClick={handleArrowClick}
          >
            <ArrowIcon className="circle-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
