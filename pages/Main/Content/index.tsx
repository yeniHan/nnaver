import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';
import SideBox from './SideBox';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';

const Wrapper = styled.div`
  margin: 20px 30px;
  position: relative;

  @media (max-width: ${TABLET_WIDTH}) {
    margin: 15px;
  }
`;


const Content = () => {
  return (
    <Wrapper>
      <MainContent />
      {/*<SideBox />*/}
    </Wrapper>
  );
};

export default Content;