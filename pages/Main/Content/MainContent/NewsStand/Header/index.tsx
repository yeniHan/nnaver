import React from 'react';
import styled from 'styled-components';
import MediaSortor from './MediaSortor';
import LayoutSelector from './LayoutSelector';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 22px 0;
  
  @media (max-width: ${TABLET_WIDTH}) {
    margin: 0 0 10px 0;
  }
`;


const Header = () => {
  return (
    <Wrapper>
      <MediaSortor />
      <LayoutSelector />
    </Wrapper>
  );
};

export default Header;
