import React, { useState} from 'react';
import styled from 'styled-components';
import MediaType from 'types/Media';
import Media from './Media';
import colors from '@styles/Colors';
import { useFormContext } from "react-hook-form";
import { MEDIA } from "../../../../../@constants/FIELD_NAMES";
import { MOBILE_WIDTH } from '@constants/MEDIA_WITHES';
import useInterval from "../../../../../../../@utils/useInterval";

const Wrapper = styled.div`
  padding: 7px 14px;
  min-width: 163px;
  height: inherit;
  background-color: ${colors.grayBackground};
  border: 1px solid ${colors.grayBorder};
  border-left: 1px solid ${colors.grayBorder};

  @media (max-width: ${MOBILE_WIDTH}) {
    display: none;
  }
`;


const MediaList = ({ medias }: { medias: MediaType[] }) => {
  const { setValue } = useFormContext();
  const [curMediaIdx, setCurMediaIdx] = useState(0);

  const selectNextMedia = () => {
    const nextIdx = curMediaIdx === medias?.length - 1? 0 : curMediaIdx + 1;
    setCurMediaIdx(nextIdx);
    setValue(MEDIA, medias[nextIdx]);
  };

  useInterval(selectNextMedia, 5000);

  return (
    <Wrapper>
      {medias?.map((v) => (
        <Media key={v?.id} media={v} />
      ))}
    </Wrapper>
  );
};

export default MediaList;
