import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import getMainMenus from '../../front-apis/apis/main/getMainMenus';
import useSWR from 'swr';
import { commonIconCSS } from '../@styles/index';
import TopMenuBarIcons from './TopMenuBarIcons';
import colors from '../../@styles/Colors';
import RealTimeWeatherInfoSlider from './RealTimeWeatherInfoSlider';
import FoldingMenu from './FoldingMenu';
import { TABLET_WIDTH, MOBILE_WIDTH } from '@constants/MEDIA_WITHES';
import APIS from '@constants/APIS';

const Wrapper = styled.div`
  padding: 0 30px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
  margin-top: 35px;
  position: relative;

  @media (max-width: ${TABLET_WIDTH}) {
    padding: 0 15px;
    margin-top: 15px;
    height: 38px;
  }
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
    font-size: 12px;
    
    &:last-child {
      margin-right: 0;
    }

    @media (max-width: ${TABLET_WIDTH}) {
      font-size: 11px;
    }
`;

const PrimaryMenuItem = styled.li`
  cursor: pointer;
  display: flex;
`;

const PrimaryMenuText = styled.a`
  color: ${colors.naverGreen};

  @media (max-width: ${TABLET_WIDTH}) {
    &:before {
      content: "${({ tabletText }) => tabletText}";
    }
  }
`;

const NonPrimaryMenuItem = styled.li`
  @media (max-width: ${TABLET_WIDTH}) {
    display: none !important;
  }
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

  @media (max-width: ${TABLET_WIDTH}) {
    font-size: 11px;
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
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
  const { data } = useSWR(APIS.MAIN_MENUS, getMainMenus);
  const primary = data?.topBar?.primary;
  const nonPrimary = data?.topBar?.nonPrimary;
  const [folded, setFolded] = useState(true);

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
              {(v?.text || v?.tabletText) && <PrimaryMenuText href={v?.url} tabletText={v?.tabletText}>{v?.text}</PrimaryMenuText>}
            </PrimaryMenuItem>
          );
        })}
        {
          nonPrimary?.map((v) => (
            <NonPrimaryMenuItem key={v?.id}>
              <a href={v?.url}>{v?.text}</a>
            </NonPrimaryMenuItem>
          ))}
        <SeeMoreBtn onClick={onClickSeeMoreBtn} folded={folded}>
          <span>{folded ? '더보기' : '접기'}</span>
          <ArrowBtn folded={folded} />
        </SeeMoreBtn>
        <FoldingMenu menus={data?.topBarFolding} folded={folded} />
      </MenuWrapper>
      <RealTimeWeatherInfoSlider />
    </Wrapper>
  );
};

export default TopMenuBar;
