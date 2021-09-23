import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import TopLine from './TopLine';
import { commonIconCSS } from '../@styles/index';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';

const Wrapper = styled.div`
  padding: 0 30px;

  @media (max-width: ${TABLET_WIDTH}) {
    padding: 0 15px;
    padding-top: 15px;
  }
`;

const Logo = styled.a`
  ${commonIconCSS};
  width: 222px;
  height: 52px;
  background-position: 0 -158px;
  display: block;
  margin-right: 18px;

  @media (max-width: ${TABLET_WIDTH}) {
    display: none !important;
  }
`;

const SearchInputArea = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <Wrapper>
      <TopLine />
      <SearchInputArea>
        <Logo href="https://www.naver.com/" />
        <SearchInput />
      </SearchInputArea>
    </Wrapper>
  );
};

export default Header;
