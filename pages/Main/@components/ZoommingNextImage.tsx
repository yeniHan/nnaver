import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    transition: transform .2s;
    width: 100%;
    height: 100%;
    object-fit: contain;

    :hover, :focus {
      transform: scale(1.2);
    }
  }
`;


const ZoommingNextImage = ({ src, objectFit = "cover", className }: { src: string; objectFit?: any; className?: string; }) => (
  <Wrapper className={className}>
    {src && <Image src={src} layout="fill" objectFit={objectFit} />}
  </Wrapper>
);

export default ZoommingNextImage;
