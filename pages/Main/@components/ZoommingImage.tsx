import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  
  > img {
    overflow: hidden;
    transition: transform .2s;
    width: 100%;
    height: 100%;
  // background-position: center;
  // background-size: cover;
    object-fit: contain;

    :hover, :focus {
      transform: scale(1.2);
    }
  }
`;

const Img = styled.div`
  transition: transform .2s;
  width: 100%;
  height: 100%;
  // background-image: url(${({ src }) => src});
  // background-position: center;
  // background-size: cover;
  > img {
    object-fit: contain;

    :hover, :focus {
      transform: scale(1.2);
    }
  }
`;

const ZoommingImage = ({ src, objectFit = "cover", className }: { src: string; objectFit?: any; className?: string; }) => (
  <Wrapper className={className}>
    {src && <Image src={src} layout="fill" objectFit={objectFit} />}
  </Wrapper>
);

export default ZoommingImage;
