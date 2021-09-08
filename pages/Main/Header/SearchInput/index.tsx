import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../../@styles/Colors';
import RecentSearchedWords from './RecentSearchedWords';
import { commonIconCSS } from '../../@styles/index';

const Wrapper = styled.div`
  display: flex;
  border: 2px solid ${colors.naverGreen};
  border-radius: 2px;
  position: relative;
  height: 50px;
`;

const Input = styled.input`
  width: 474px;
  padding: 13px 15px;
`;

const DropdownArrow = styled.button(({ folded }) => css`
  ${commonIconCSS};
  width: 10px;
  height: 5px;
  background-position: ${ folded ? '-96px -296px': '-108px -296px'};
  margin: 22px 9px;
`);

const SearchICWrapper = styled.div`
  width: 56px;
  background-color: ${colors.naverGreen};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIC = styled.button`
  ${commonIconCSS};
  width: 22px;
  height: 22px;
  background-position: -420px -208px;
`;


const SearchInput = () => {
  const [folded, setFolded] = useState(true);

  const onClickDropdownArrow = async () => {
    setFolded((prev) => !prev);
  };

  return (
    <div>
      <Wrapper>
        <Input />
        <DropdownArrow folded={folded} onClick={onClickDropdownArrow} />
        <SearchICWrapper>
          <SearchIC />
        </SearchICWrapper>
      </Wrapper>
      <RecentSearchedWords folded={folded} />
    </div>
  );
};

export default SearchInput;
