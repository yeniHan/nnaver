import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';
import SideBox from './SideBox';

const Wrapper = styled.div`
  margin: 20px 30px;
  position: relative;
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