import React, { useState, useEffect, createRef, useMemo } from 'react';
import styled, { css } from 'styled-components';
import IntervalWrapper from '../IntervalWrapper';
import useInit from './useInit';
import useInterval from "../../../@utils/useInterval";
const Wrapper = styled.div`
  width: 200px;
  position: relative;
  border: 1px solid blue;
`;

const ItemList = styled.div(({ direction, top, left }) => css`
  display: flex;
  flex-direction: ${direction};
  position: absolute;
  top: ${top || 'unset'}px;
  left: ${left && `-${left}px`};
  transition: left 1s ease-out;
`);

const Index = ({
  items,
  itemWrapperStyle,
  direction = 'row',
  autoPlay = true,
  autoPlayTimeGap = 1000,
  setCurrentItem,
  setPrev,
  setNext,
}:{
  items: React.ReactElement[];
  itemWrapperStyle?: any;
  direction: 'column' | 'row';
  autoPlay: boolean;
  autoPlayTimeGap: number;
  setCurrentItem?: (idx: number) => void;
  setPrev?: () => void;
  setNext?: () => void;
}) => {
  const listName = { A: 'A', B: 'B'};
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [listARefs, setListARefs] = useState([]);
  const [listBRefs, setListBRefs] = useState([]);
  const [curList, setCurList] = useState(listName.A);
  const [curIdx, setCurIdx] = useState(0);
  const isLastIdxInCurList = curIdx === items?.length - 1;
  const isFirstIdxInCurList = curIdx === 0;
  const [curTop, setCurTop] = useState(0);
  const [curLeft, setCurLeft] = useState(0);
  const hasListARefs = listARefs?.length > 0;
  const hasListA = listA?.length > 0;
  const canInitListA = !hasListA && hasListARefs;
  const enableAutoPlay = hasListA && hasListARefs;

  // init
  useInit({
    setListARefs,
    setListA,
    items,
    canInitListA,
    listARefs
  });

  // 3. enableAutoPlay가 true가되면, useInterval()에서 주기적으로 실행될 callback
  // ; listPrev, listNext 업데이트 및 이에 따른 refs 업데이트
  const updateListAndRefs = () => {
    if(curList === listName.A) {
      setListB(items?.map((comp, idx) => {
        return (<div key={`crs-${idx}`} ref={listBRefs[idx]}>{comp}</div>);
      }));
    }

  };

  const updatePosition = () => {
    if (direction === 'row') {
      const width = (curList === listName.A ? listARefs : listBRefs)?.[curIdx]?.current?.getBoundingClientRect()?.width;
      setCurLeft((prev) => isFirstIdxInCurList ? 0 : prev + width);
    }
  };

  const intervalCallBack = () => {
    setCurIdx((prev) => isLastIdxInCurList ? 0 : prev + 1);
    updatePosition();
    if(isLastIdxInCurList) updateListAndRefs();
  };


  const prevList = useMemo(() => curList === listName.A ? listA: listB, [curList, listA, listB]);
  const nextList = useMemo(() => curList === listName.A ? listB: listA, [curList, listA, listB]);

  if (items?.length === 0) return null;

  return (
    <Wrapper style={itemWrapperStyle} >
      <ItemList direction={direction} left={curLeft}>
        {prevList}
        {nextList}
        {enableAutoPlay && <IntervalWrapper callback={updatePosition} interval={1000} />}
      </ItemList>
    </Wrapper>
  );
};

export default Index;
