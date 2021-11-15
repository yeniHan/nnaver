import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import {useTotalCategories} from "../../Context/PostContext";
import colors from '@styles/Colors';

const Wrapper = styled.div`
  padding: 22px 17px;
  border-right: 1px solid ${colors.grayBorder};
  border-left: 1px solid ${colors.grayBorder};
`;

const Guide = styled.div`
  margin-top: 25px;
  text-align: center;
`;

const CheckboxArea = styled.div`
  display: flex;
`;

// eslint-disable-next-line no-unused-vars
const CheckboxForm = () => {
  const totalCategories = useTotalCategories();

  return (
    <Wrapper>
      <Guide>
        <strong>관심주제를 선택해주세요.</strong>
        <p>관심주제를 설정하시면 기본 주제 앞으로 배치됩니다.</p>
      </Guide>
      <CheckboxArea>
        {totalCategories?.map((v) => (
          <Checkbox key={v?.name} category={v} />
        ))}
      </CheckboxArea>
    </Wrapper>
  );
};

export default CheckboxForm;
