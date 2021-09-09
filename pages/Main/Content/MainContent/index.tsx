import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import RealTimeNews from './RealTimeNews';

const Wrapper = styled.div`
  width: 60%;
  position: absolute;
  left: 0;
`;


const MainContent = () => {
  return (
    <Wrapper>
      <Banner src={'src url'} />
      <RealTimeNews />
    </Wrapper>
  );
};

export default MainContent;