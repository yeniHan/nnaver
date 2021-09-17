import React from 'react';
import styled, { css } from 'styled-components';
import MediaType from '../../../../../../../types/Media';
import {useFormContext, useWatch} from "react-hook-form";
import {LAYOUT, LAYOUT_OPTIONS} from "../../../../../../../@constants/LAYOUT_SELECTOR";
import {MEDIA_SORTER, MEDIA_SORTERS} from "../../../../../../../@constants/MEDIA_SORTERS";
import { MEDIA } from '../../../../../@constants/FIELD_NAMES';
import { commonIconCSS } from 'Main/@styles';


const selectedCss = css`
  padding-bottom: 14px;
  padding-top: 14px;
  margin: 8px 0 13px;
  background-color: #4063bd;
  border-radius: 17px;
  color: #fff;
  font-weight: 700;
  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 16%);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 16%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.label`
  padding: 0 14px 0 18px;
  margin: 12px 0;
  display: block;
  
  ${({ selected }) => selected && selectedCss};
  
  input { 
    visibility: hidden;
  }
`;

const ArrowIc = styled.span`
  ${commonIconCSS};
  width: 6px;
  height: 8px;
  background-position: -295px -337px;
`;


const Media = ({ media }: { media: MediaType }) => {
  const { register, setValue } = useFormContext();
  const selectedMedia = useWatch({
    name: MEDIA,
  });
  const isSelected = selectedMedia?.id === media?.id;

  return (
    <Wrapper htmlFor={media?.id} selected={isSelected}>
      {media?.name}
      {
        <input
          {...register(MEDIA)}
          type="radio"
          id={media?.id}
          value={media?.id}
          onChange={() => setValue(MEDIA, media)}
        />
      }
      {isSelected && <ArrowIc />}
    </Wrapper>
  );
};

export default Media;
