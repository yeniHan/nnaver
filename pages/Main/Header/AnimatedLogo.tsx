import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';
import colors from '@styles/Colors';


const Wrapper = styled.a`
  margin-right: 18px;
  margin-top: 3px;
  display: flex;

  @media (max-width: ${TABLET_WIDTH}) {
    display: none !important;
  }
`;

const Cube = styled.div`
  position: relative;
  width: 50px;
  animation-name: rotateCube;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  transform-style: preserve-3d;

  @keyframes rotateCube {
    0% {
      transform: rotateX(0)
    }
    50% {
      transform: rotateX(180deg)
    }
    100% {
      transform: rotateX(360deg)
    }
  }
`;

const SlideCommonStyle = css`
  font-size: 50px;
  font-weight: bold;
  color: ${colors.naverGreen};
  line-height: 0.9;
  font-family: cursive;
  position: absolute;
  top: 0;
  width: 50px;
  background-color: white;
`;

// 위
const Slide1 = styled.div`
  ${SlideCommonStyle};
  transform: rotateX(90deg) translateX(0) translateY(0) translateZ(25px);
  font-style: italic;
  color: #3ec673a8;
`;
//앞
const Slide2 = styled.div`
  ${SlideCommonStyle};
  transform: translateX(0) translateY(0) translateZ(25px);
`;

// 아래
const Slide3 = styled.div`
  ${SlideCommonStyle};
  transform: rotateX(-90deg) translateX(0) translateY(0) translateZ(25px);
  font-style: italic;
  color: #3ec673a8;
`;

//뒤
const Slide4 = styled.div`
  ${SlideCommonStyle};
  transform: rotateX(180deg) translateX(0) translateY(0) translateZ(25px);
`;



const AnimatedLogo = () => {
  const text = 'NNAVER';

  return (
    <Wrapper
      href="https://www.naver.com"
    >
      {text.split('').map((v, idx) => (
        <Cube key={`cube-${idx}`}>
          <Slide1>{v}</Slide1>
          <Slide2>{v}</Slide2>
          <Slide3>{v}</Slide3>
          <Slide4>{v}</Slide4>
        </Cube>
      ))}
    </Wrapper>
  );
};

export default AnimatedLogo;