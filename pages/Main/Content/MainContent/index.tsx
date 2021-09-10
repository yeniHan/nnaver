import React from 'react';
import styled from 'styled-components';
import NewsStand from './NewsStand';
import Banner from './Banner';
import bannerImg from '../../../../assets/main/banner.png';

const Wrapper = styled.div`
  width: 60%;
  position: absolute;
  left: 0;
`;


const MainContent = () => {
  return (
    <Wrapper>
      <Banner src={bannerImg} />
      <NewsStand />
    </Wrapper>
  );
};

export default MainContent;