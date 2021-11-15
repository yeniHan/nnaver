import React, {useCallback} from 'react';
import styled, { css } from 'styled-components';
import { commonIconCSS } from 'Main/@styles/index';
import colors from '@styles/Colors';
import {
  useInitForm,
  useReset,
  useSelectAll,
  useSubmitPreferedCategoryForm
} from "../Context/PreferedCategoryFormContext";
import getRecommendedPosts from "../../../../../front-apis/apis/main/getRecommendedPosts";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 9px 8px 17px;
  border: 1px solid ${colors.grayBorder};
  background-color: ${colors.grayBackground};
  
  > div {
    display: inherit;
    align-items: center;
  }
`;

const BtnCommonStyle = css`
  font-size: 13px;

  :hover{
    text-decoration: underline;
  }
`;

const TextBtn = styled.button`
  ${BtnCommonStyle};
`;

const InitIC = styled.span`
  ${commonIconCSS};
  width: 11px;
  height: 14px;
  background-position: -256px -245px;
  margin-right: 6px;
`;

const Devider = styled.span`
  width: 1px;
  height: 14px;
  background-color: ${colors.darkGrayBorder};
  margin: 0 25px;
`;

const ColorBtnCss = css`
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;  
  ${BtnCommonStyle};
`;

const SettingBtn = styled.button`
  ${ColorBtnCss};
  background-color: ${colors.naverGreen};
  margin-right: 6px;
`;

const SettingIC = styled.span`
  ${commonIconCSS};
  width: 11px;
  height: 11px;
  background-position: -226px -337px;
  margin-right: 5px;
`;

const CancelBtn = styled.button`
  ${ColorBtnCss};
  background-color: ${colors.grayBtnBackground};
`;


const CancelIC = styled.span`
  ${commonIconCSS};
  width: 10px;
  height: 10px;
  background-position: -408px -122px;
  margin-right: 5px;
`;

// eslint-disable-next-line no-unused-vars
const BottomLine = ({ setShowPreferedCategoryCheckboxForm }: { setShowPreferedCategoryCheckboxForm: (show: boolean) => void}) => {
  const selectAll = useSelectAll();
  const reset = useReset();
  const submitPreferedCategoryForm = useSubmitPreferedCategoryForm();
  const initForm = useInitForm();
  const onClickCanCelBtn = useCallback(() => {
    setShowPreferedCategoryCheckboxForm(false);
    initForm();
  }, [initForm]);

  const onClickSettingBtn = useCallback(async () => {
    await submitPreferedCategoryForm();
    await getRecommendedPosts();
    setShowPreferedCategoryCheckboxForm(false);
    initForm();
  }, [submitPreferedCategoryForm, initForm]);

  return (
    <Wrapper>
      <div>
        <TextBtn onClick={reset}>
          <span><InitIC />초기화하기</span>
        </TextBtn>
        <Devider />
        <TextBtn onClick={selectAll}>
          <span>전체선택</span>
        </TextBtn>
      </div>
      <div>
        <SettingBtn onClick={onClickSettingBtn}>
          <span>
            <SettingIC />설정
          </span>
        </SettingBtn>
        <CancelBtn onClick={onClickCanCelBtn}>
          <span>
            <CancelIC />취소
          </span>
        </CancelBtn>
      </div>
    </Wrapper>
  );
};

export default BottomLine;
