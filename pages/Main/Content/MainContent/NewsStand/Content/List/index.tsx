import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import {useFormContext, useWatch} from "react-hook-form";
import { MEDIA_SORTER } from '../../../../../../@constants/MEDIA_SORTERS';
import MediaList from './MediaList';
import Articles from './Articles';
import getNewsStandsArticles from 'front-apis/apis/main/getNewsStandsArticles';
import useAsync from "../../../../../../@utils/useAsync";
import {MEDIA} from "../../../../@constants/FIELD_NAMES";
import useInterval from "@utils/useInterval";
import { MOBILE_WIDTH } from '@constants/MEDIA_WITHES';


const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;


const List = () => {
  const { setValue } = useFormContext();
  const sorter = useWatch({
    name: MEDIA_SORTER,
  });
  const selectedMedia = useWatch({
    name: MEDIA,
  });

  const [res, _] = useAsync(getNewsStandsArticles, [{ sorter }], [sorter]);
  const [medias, setMedias] = useState([]);
  const [articles, setArticles] = useState([]);
  const [curMediaIdx, setCurMediaIdx] = useState(0);

  const selectNextMedia = () => {
    const nextIdx = curMediaIdx === medias?.length - 1? 0 : curMediaIdx + 1;
    setCurMediaIdx(nextIdx);
    setValue(MEDIA, medias[nextIdx]);
  };

  useInterval(selectNextMedia, 5000);

  useEffect(() => {
    const hasData = !!res?.data?.medias && !!res?.data?.articles;

    if (hasData) {
      setMedias(res?.data?.medias);
      const selectedaArticles = res?.data?.articles?.filter((v) => v?.media === selectedMedia?.id);
      setArticles(selectedaArticles);
    }
  }, [res]);

  useEffect(() => {
    const selectedaArticles = res?.data?.articles?.filter((v) => v?.media === selectedMedia?.id);
    setArticles(selectedaArticles);
  }, [selectedMedia]);


  return (
    <Wrapper>
      <MediaList medias={medias} />
      <Articles articles={articles} />
    </Wrapper>
  );
};

export default List;