import React from 'react';
import styled from 'styled-components';
import { mainMenuType } from './@types';

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
  z-index: 1;
  display: flex;
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
