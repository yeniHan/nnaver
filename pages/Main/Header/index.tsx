import React from 'react';
import styled from 'styled-components';
import Index from './SearchInput';
import TopLine from './TopLine';
import { commonIconCSS } from '../@styles/index';

const Wrapper = styled.div`
  padding: 0 30px;
`;

const Logo = styled.a`
  ${commonIconCSS};
  width: 222px;
  height: 52px;
  background-position: 0 -158px;
  display: block;
  margin-right: 18px;
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
        <Index />
      </SearchInputArea>
    </Wrapper>
  );
};

export default Header;
