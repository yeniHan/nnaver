import React from 'react';
import styled from 'styled-components';
import MediaList from './MediaList';
import Articles from './Articles';


import { MOBILE_WIDTH } from '@constants/MEDIA_WITHES';
import {useWatch} from "react-hook-form";
import {ARTICLES, MEDIAS} from "../../../../@constants/FIELD_NAMES";


const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;


const List = () => {
  const medias = useWatch({
    name: MEDIAS,
  });

  const articles = useWatch({
    name: ARTICLES,
  });

  return (
    <Wrapper>
      <MediaList medias={medias} />
      <Articles articles={articles} />
    </Wrapper>
  );
};

export default List;