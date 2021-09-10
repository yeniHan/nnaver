import React from 'react';
import styled from 'styled-components';
import { commonIconCSS } from '../@styles/index';
import colors from '../../@styles/Colors';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 35px;
  align-items: center;
`;

const MakeStartPage = styled.div`
  font-size: 11px;
  color: ${colors.black0};
  display: inherit;
  align-items: inherit;
`;

const OtherServices = styled.div`
  border-left-color: ${colors.gray0};
  margin-left: 3px;
`;
const JuniorNaver = styled.button`
  ${commonIconCSS};
  width: 63px;
  height: 10px;
  background-position: -284px -267px;
  margin-right: 10px;
  
  :hover {
    background-position: -346px -267px;
  }
`;

const HappyBean = styled.button`
  ${commonIconCSS};
  width: 34px;
  height: 11px;
  background-position: -220px -144px;
  
  :hover {
    background-position: -380px -199px;
  }
`;

const RightArrowBtn = styled.button`
  ${commonIconCSS};
  display: inline-block;
  width: 26px;
  height: 26px;
  background-position: -373px -352px;
  background-repeat: no-repeat;
  vertical-align: top;
  margin-left: 3px;
`;


const TopLine = () => {
  return (
    <Wrapper>
      <MakeStartPage>
        {'네이버를 시작페이지로'}
        <RightArrowBtn />
      </MakeStartPage>
      <OtherServices>
        <JuniorNaver />
        <HappyBean />
      </OtherServices>
    </Wrapper>
  );
};

export default TopLine;
