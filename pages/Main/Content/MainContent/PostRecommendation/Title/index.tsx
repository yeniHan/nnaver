import React from 'react';
import styled from 'styled-components';
import { useWatch } from "react-hook-form";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.strong`
  font-size: 14px;
`;

const SubTitle = styled.span`
  font-size: 12px;
  margin-left: 8px;
  color: grey;
`;

const GrayText = styled.span`
  color: gray;
`;

const Devider = styled.span`
  border-left: 1px solid gray;
`;

const SettingIc = styled.span`
  width: 11px;
  height: 11px;
  background-position: -213px -337px;
`;

const Title = () => {
    const postsNum = useWatch();
return (

    <Wrapper>
        <div>
        <TitleText>오늘 읽을만한 글</TitleText>
        <SubTitle>주제별로 분류된 다양한 글 모음</SubTitle>
        </div>
        <div>
            <GrayText>{postsNum}개의 글</GrayText>
            <Devider />
            <SettingIc />
            <
        </div>
    </Wrapper>
)
}

export default Title;
