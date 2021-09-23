import React from 'react';
import styled from 'styled-components';
import { TABLET_WIDTH, MOBILE_WIDTH } from '@constants/MEDIA_WITHES';

const Wrapper = styled.div`
  position: absolute;
  top: 52px;
  right: 0;
  left: 0;
  display: ${({ folded }) => folded ? 'none' : 'block'};
  padding: 20px 30px 22px;
  background-color: #fff;
  border-top: 1px solid #e4e8eb;
  -webkit-box-shadow: 0 4px 4px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 12%);
  z-index: 2;
  display: flex;

  @media (max-width: ${TABLET_WIDTH}) {
    top: 40px;
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;


const Sector = styled.div`
  flex: 1;
  border-left: 1px solid #e4e8eb;
  padding: 0 15px;
  
  &:last-child {
    border-right: 1px solid #e4e8eb;
  }
`;

const SectorName = styled.div`
  margin-bottom: 3px;
  font-weight: 700;
  line-height: 26px;
`;

const MenuName = styled.a`
  display: block;
  font-size: 13px;
  line-height: 26px;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }

  @media (max-width: ${TABLET_WIDTH}) {
    font-size: 11px;
  }
`;


const FoldingMenu = ({ menus, folded }: { menus: {}; folded: boolean }) => {
  if (folded) return null;

  return (
    <Wrapper>
      {menus && Object.entries(menus)?.map(([sector, menus]) => {
        return (
          <Sector key={sector}>
            <SectorName>{sector}</SectorName>
            {menus?.map((v) => <MenuName key={v?.text} href={v?.url}>{v?.text}</MenuName>)}
          </Sector>
        );
      })}
    </Wrapper>
  );
};

export default FoldingMenu;
