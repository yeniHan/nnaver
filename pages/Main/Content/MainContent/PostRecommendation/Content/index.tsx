import React, {useEffect} from 'react';
import styled from 'styled-components';
import LAYOUT_INFO from '../@constants/LAYOUT_INFO';
import WithMainPostLayout from './Layout/WithMainPostLayout';
import ListLayout from './Layout/ListLayout';
import SeeMoreButton from './SeeMoreButton';
import { useCurrentPage, useCurrentCategory } from '../Context/PostContext';


const Wrapper = styled.div`
  display: ${({ hasMain }) => hasMain ? 'flex' : 'block'};
`;

const Content = () => {
  const currentPage = useCurrentPage();
  const currentCategory = useCurrentCategory();
  // @ts-ignore
  const hasMainPost = currentCategory ? LAYOUT_INFO[currentCategory]?.hasMainPost : [];
  const leftPagesCount = currentPage - 1;
  const leftPagesCountFakeArr = new Array(leftPagesCount)?.fill(0);

  return (
    <Wrapper hasMainPost={hasMainPost}>
      {hasMainPost ? <WithMainPostLayout /> : <ListLayout page={1}/>}
      {
        leftPagesCountFakeArr?.map((_, idx) =>
          <ListLayout key={idx +1} page={idx + 2} />
        )
      }
      <SeeMoreButton />
    </Wrapper>
  );
};

export default Content;