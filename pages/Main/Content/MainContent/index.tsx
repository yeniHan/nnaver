import React from 'react';
import styled from 'styled-components';
import NewsStand from './NewsStand';
import Banner from './Banner';
import PostRecommendation from './PostRecommendation';
import bannerImg from '../../../../assets/main/banner.png';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';

const Wrapper = styled.div`
  width: 60%;
  position: absolute;
  left: 0;

  @media (max-width: ${TABLET_WIDTH}) {
    width: 100%;
  }
`;


const MainContent = () => {
  return (
    <Wrapper>
      <Banner src={bannerImg} layout="responsive" />
      <NewsStand />
      <PostRecommendation />
    </Wrapper>
  );
};

export default MainContent;