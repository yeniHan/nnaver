import React from 'react';
import styled from 'styled-components';
import { commonIconCSS } from '../../../../@styles';
import { useFormContext, useWatch } from "react-hook-form";
import { MEDIA_SORTERS, MEDIA_SORTER } from '../../../../../@constants/MEDIA_SORTERS';

const Wrapper = styled.div`
  input {
    display: none;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

const NewspaperIc = styled.span`
  ${commonIconCSS};
  width: 27px;
  height: 24px;
  background-position: 0 -396px;
`;

const ArrowIc = styled.span`
  ${commonIconCSS};
  width: 7px;
  height: 11px;
  background-position: -410px -213px;
  margin-left: 6px;
`;

const CircleIc = styled.span`
  background-color: #c7ccd1;
  display: inline-block;
  width: 4px;
  height: 4px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  margin: 3px 8px;
`;

const MediaSelectType = styled.label`
  font-weight: ${({ selected }) => selected ? 'bold' : 'normal'};
  font-size: 14px;
  color: ${({ selected }) => selected ? 'inherit' : '#505050'};
  cursor: pointer;

  &:first-of-type {
    margin-left: 6px;
  }
`;

const MediaSortor = () => {
  const { register } = useFormContext();
  const mediaSorter = useWatch({
    name: MEDIA_SORTER,
  });

  return (
    <Wrapper>
      <NewspaperIc />
      <Title>뉴스 스탠드</Title>
      <ArrowIc />
      <MediaSelectType htmlFor={MEDIA_SORTERS.SUBSCRIBED} selected={mediaSorter === MEDIA_SORTERS.SUBSCRIBED}>
          구독한 언론사
        <input
          {...register(MEDIA_SORTER)}
          type="radio"
          id={MEDIA_SORTERS.SUBSCRIBED}
          value={MEDIA_SORTERS.SUBSCRIBED}
        />
      </MediaSelectType>
      <CircleIc />
      <MediaSelectType htmlFor={MEDIA_SORTERS.ALL} selected={mediaSorter === MEDIA_SORTERS.ALL}>
          전체 언론사
        <input
          {...register(MEDIA_SORTER)}
          type="radio"
          id={MEDIA_SORTERS.ALL}
          value={MEDIA_SORTERS.ALL}
        />
      </MediaSelectType>
    </Wrapper>
  );
};

export default MediaSortor;
