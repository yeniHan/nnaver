import React, {useEffect, useMemo} from 'react';
import styled from 'styled-components';
import LAYOUT_INFO from '../@constants/LAYOUT_INFO';
import WithMainPostLayout from './Layout/WithMainPostLayout';
import ListLayout from './Layout/ListLayout';
import SeeMoreButton from './SeeMoreButton';
import { useCurrentPage, useCurrentCategory } from '../Context/PostContext';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';
import useMedia from 'use-media';


const Wrapper = styled.div`
  display: ${({ hasMain }) => hasMain ? 'flex' : 'block'};
`;

const Content = () => {
  const currentPage = useCurrentPage();
  const currentCategory = useCurrentCategory();
  const isPC = useMedia({ minWidth: TABLET_WIDTH });
  // @ts-ignore
  const hasMainPost = currentCategory ? LAYOUT_INFO[currentCategory]?.hasMainPost : [];
  const fakeArrForLeftPages = new Array(hasMainPost ? currentPage - 1 : currentPage)?.fill(0);


  return (
    <Wrapper hasMainPost={hasMainPost}>
      {isPC && hasMainPost ? <WithMainPostLayout /> : <ListLayout page={1}/>}
      {
        fakeArrForLeftPages?.map((_, idx) =>
          <ListLayout key={idx +1} page={idx + 2} />
        )
      }
      <SeeMoreButton />
    </Wrapper>
  );
};

export default Content;