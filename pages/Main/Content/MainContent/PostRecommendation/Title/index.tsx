import React from 'react';
import styled from 'styled-components';
import { commonIconCSS } from 'Main/@styles';
import {TABLET_WIDTH} from "../../../../../@constants/MEDIA_WITHES";
import { useTotalPosts } from "../Context/PostContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TitleText = styled.strong`
  font-size: 14px;
`;

const SubTitle = styled.span`
  font-size: 12px;
  margin-left: 8px;
  color: grey;

  @media (max-width: ${TABLET_WIDTH}) {
    display: none;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GrayText = styled.span`
  color: gray;
  ${({showPreferedCategoryCheckboxForm}) => showPreferedCategoryCheckboxForm && 'text-decoration: underline'};
  
  b {
    font-width: bold;
    color: #000;
  }
`;

const Devider = styled.span`
  border-left: 1px solid gray;
  margin: 0 14px;
  display: inline-block;
  height: 15px;
`;

const SettingIc = styled.span`
  ${commonIconCSS};
  width: 11px;
  height: 11px;
  background-position: -213px -337px;
  margin-right: 4px;
`;

const Title = ({ showPreferedCategoryCheckboxForm, setShowPreferedCategoryCheckboxForm }:
                   // eslint-disable-next-line no-unused-vars
                   { showPreferedCategoryCheckboxForm: boolean; setShowPreferedCategoryCheckboxForm: (show:boolean) => void }) => {
  const totalPosts = useTotalPosts();
  const postsNum = totalPosts?.length || 0;

  return (
    <Wrapper>
      <div>
        <TitleText>오늘 읽을만한 글</TitleText>
        <SubTitle>주제별로 분류된 다양한 글 모음</SubTitle>
      </div>
      <FlexBox>
        <GrayText><b>{postsNum}</b>개의 글</GrayText>
        <Devider />
        <SettingIc />
        <GrayText
          showPreferedCategoryCheckboxForm={showPreferedCategoryCheckboxForm}
          onClick={() => setShowPreferedCategoryCheckboxForm(true)}
        >관심주제 설정</GrayText>
      </FlexBox>
    </Wrapper>
  );
};

export default Title;
