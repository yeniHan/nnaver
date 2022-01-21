import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';
import colors from '@styles/Colors';


const Wrapper = styled.a`
  position: relative;
  margin-right: 18px;
  margin-top: 3px;
  display: block;
  width: 222px;

  @media (max-width: ${TABLET_WIDTH}) {
    display: none !important;
  }
`;

const TextWarpper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
`;

const letterCommonStyle = css`
  font-size: 50px;
  font-weight: bold;
  color: ${colors.naverGreen};
  line-height: 0.9;
  font-family: cursive;
`;

const FrontLetter = styled.div(({ hovered, idx }: { hovered: boolean; idx: number}) => css`
  ${letterCommonStyle};

  ${hovered && css`
    transform-origin: 0 0;
    transform: rotateX(90deg);
    transition: transform 1s ease-out ${idx*0.08}s;
  `}
`);

const BottomLetter = styled.div(({ hovered, idx }: { hovered: boolean; idx: number}) => css`
  ${letterCommonStyle};
  transform-origin: 0 50px;
  transform: rotateX(90deg);
  font-style: italic;
  
  ${
  hovered && css`transform-origin: top;
      transform-origin: 0 50px;
      transform: rotateX(0);
      transition: transform 1s ease-out ${idx*0.08}s;
    `};
`);

const AnimatedLogo = () => {
  const [hovered, setHovered] = useState(false);
  const onHoverHandler = (hovered_: boolean) => {
    setHovered(hovered_);
  };
  const text = 'NNAVER';

  return (
    <Wrapper
      href="https://www.naver.com"
      onMouseEnter={() => onHoverHandler(true)}
      onMouseLeave={() => onHoverHandler(false)}
    >
      <TextWarpper>
        {text.split('').map((v, idx) => <FrontLetter key={`fl-${idx}`} hovered={hovered} idx={idx}>{v}</FrontLetter>)}
      </TextWarpper>
      <TextWarpper>
        {text.split('').map((v, idx) => <BottomLetter key={`bl-${idx}`} hovered={hovered} idx={idx}>{v}</BottomLetter>)}
      </TextWarpper>
    </Wrapper>
  );
};

export default AnimatedLogo;