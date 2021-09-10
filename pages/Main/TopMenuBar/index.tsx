import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import getMainMenus from '../../front-apis/apis/main/getMainMenus';
import { commonIconCSS } from '../@styles/index';
import TopMenuBarIcons from './TopMenuBarIcons';
import colors from '../../@styles/Colors';
import RealTimeWeatherInfoSlider from './RealTimeWeatherInfoSlider';
import FoldingMenu from './FoldingMenu';

const Wrapper = styled.div`
  padding: 0 30px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
  margin-top: 35px;
  position: relative;
`;

const MenuWrapper = styled.ul`
  display: inherit;
  align-items: inherit;

  > li {
    height: 30px;
    display: inherit;
    margin-right: 10px;
    align-items: center;
    word-break: keep-all;
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const PrimaryMenuItem = styled.li`
  a { 
    color: ${colors.naverGreen};
  }
  
  cursor: pointer;
  display: flex;
`;

const SeeMoreBtn = styled.button(({ folded }) => css`
  width: 61px;
  margin-left: 17px;
  font-size: 13px;
  color: #202020;
  align-items: inherit;
  display: inherit;
  color: ${folded ? 'unset' : colors.naverGreen};
  cursor: pointer;

  span:hover {
    text-decoration: underline;
    ${!folded && `text-decoration-color: ${colors.naverGreen}`};
  }
`);

const ArrowBtn = styled.button(({ folded }) => css`
  ${commonIconCSS};
  width: 11px;
  height: 7px;
  background-position: ${folded ? '-83px -296px' : '-70px -296px'};
  margin-left: 7px;
`);

const TopMenuBar = () => {
  const [mainMunus, setMainMenus]= useState();
  const [foldingMenus, setFoldingMenu] = useState();
  const primary = mainMunus?.primary;
  const nonPrimary = mainMunus?.nonPrimary;
  const [folded, setFolded] = useState(true);

  useEffect( () => {
    getMainMenus().then((data) => {
      setMainMenus(data?.topBar);
      setFoldingMenu(data?.topBarFolding);
    });
  }, []);

  const onClickSeeMoreBtn = () => {
    setFolded((prev) => !prev);
  };

  return (
    <Wrapper>
      <MenuWrapper>
        {primary?.map((v) => {
          const Ic = TopMenuBarIcons[v?.id];
          return (
            <PrimaryMenuItem key={v?.id}>
              {v?.hasIcon && <Ic />}
              {v?.text && <a href={v?.url}>{v?.text}</a>}
            </PrimaryMenuItem>
          );
        })}
        {
          nonPrimary?.map((v) => (
            <li key={v?.id}>
              <a href={v?.url}>{v?.text}</a>
            </li>
          ))}
        <SeeMoreBtn onClick={onClickSeeMoreBtn} folded={folded}>
          <span>{folded ? '더보기' : '접기'}</span>
          <ArrowBtn folded={folded} />
        </SeeMoreBtn>
        <FoldingMenu menus={foldingMenus} folded={folded} />
      </MenuWrapper>
      <RealTimeWeatherInfoSlider />
    </Wrapper>
  );
};

export default TopMenuBar;
