import React from 'react';
import Img from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  
  img {
    :hover{
      transform: scale(1.5);
    }  
  }
`;

const Image = ({ src, objectFit = "cover", className }: { src: string; objectFit?: any; className?: string; }) => (
  <Wrapper className={className}>
    {src && <Img src={src} layout="fill" objectFit={objectFit} />}
  </Wrapper>
);

export default Image;
