import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import TopLine from './TopLine';
import { commonIconCSS } from '../@styles/index';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';
import AnimatedLogo from './AnimatedLogo'

const Wrapper = styled.div`
  padding: 0 30px;

  @media (max-width: ${TABLET_WIDTH}) {
    padding: 0 15px;
    padding-top: 15px;
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
        <AnimatedLogo />
        <SearchInput />
      </SearchInputArea>
    </Wrapper>
  );
};

export default Header;
