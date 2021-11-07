import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Img = styled.div`
  transition: transform .2s;
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  object-fit: contain;

  :hover, :focus {
    transform: scale(1.2);
  }
`;

const ZoommingImage = ({ src, className }: { src: string; className?: string; }) => (
  <Wrapper className={className}>
    <Img src={src} />
  </Wrapper>
);

export default ZoommingImage;
