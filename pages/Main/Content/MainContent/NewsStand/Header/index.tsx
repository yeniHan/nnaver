import React from 'react';
import styled from 'styled-components';
import MediaSortor from './MediaSortor';
import LayoutSelector from './LayoutSelector';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 22px 0;
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
