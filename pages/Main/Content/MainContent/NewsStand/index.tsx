import React from 'react';
import styled from 'styled-components';
import RealTimeNews from './RealTimeNews';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 12px;
`;

const NewsStand = () => {
  return (
    <Wrapper>
      <RealTimeNews />
    </Wrapper>
  );
};

export default NewsStand;
