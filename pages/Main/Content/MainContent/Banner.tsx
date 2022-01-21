import React, { useState, useRef } from "react";
import styled, { css } from 'styled-components';
import Img from 'Main/@components/Image';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';
import colors from '@styles/Colors';
import _ from 'lodash';

// todo: "Styled" doesn't work to <Img />..Find how to apply css to it.

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 135px !important;

  @media (max-width: ${TABLET_WIDTH}) {
    display: none;
  }
`;


const BannerImg = styled(Img)`
  width: inherit;
  height: inherit;
`;

const MouseEffect = styled.div(({ mouseX, mouseY }) => css`
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;
  cursor: pointer;
  background: radial-gradient(at ${mouseX}px ${mouseY}px, transparent 10%, ${colors.naverGreen});
  transition: background 2s ease-out;
`);

const Instruction = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 40px;
  color: white;
`;

const Banner = ({ src }:{ src: string }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const mouseEffectRef = useRef(null);
  const onMouseMove = _.throttle((e: any) => {
    console.log('mouseMove');
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }, 300);

  return (
    <Wrapper>
      <BannerImg
        src={src}
      />
      <MouseEffect
        ref={mouseEffectRef}
        mouseX={mouseX}
        mouseY={mouseY}
        onMouseMove={onMouseMove}
      /><Instruction>Hover your mouse.</Instruction>
    </Wrapper>
  );
};

export default Banner;