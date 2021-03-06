import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    transition: transform .2s;
    width: 100%;
    height: inherit;
  // background-position: center;
  // background-size: cover;
    object-fit: contain;

    :hover, :focus {
      transform: scale(1.2);
    }
  }
`;


const ZoommingImage = ({ src, className }: { src: string; className?: string; }) => (
  <Wrapper className={className}>
    {src && <img src={src} />}
  </Wrapper>
);

export default ZoommingImage;