import React from 'react';
import styled from 'styled-components';
import {categegoryCss, fromCss, titleCss, constentCss} from "./@styles/feildsCss";
import {ellipsisMultiCss} from "../../../../../../@styles";
import {useCurrentPage} from '../../Context/PostContext'
import ZoommingImg from "../../../../../@components/ZoommingImage";
import usePostsOfThisPage from "../../@hooks/usePostsOfThisPage";
import colors from '@styles/Colors';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';

const Wrapper = styled.div`
 ${({ isCurrentPage }) => !isCurrentPage && `border-bottom: 1px solid ${colors.grayBorder}`};
  padding: 18px 0;
`;

const PostWrapper = styled.a`
  display: flex;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledZoomingImg = styled(ZoommingImg)`
  width: 170px;
  height: 114px;
  margin-right: 18px;
`;

const ContentWrapper = styled.div`
  padding: 4px 47px 0 0;
  width: calc(100% - 158px);

  @media (max-width: ${TABLET_WIDTH}) {
    padding-right: 0;
    width: 100%;
  }
`;

const Category = styled.div`
  ${categegoryCss};
`;

const Title = styled.div`
  ${titleCss};
  margin-top: 2px;
  ${ellipsisMultiCss};
  -webkit-line-clamp: 2;
`;

const Content = styled.div`
  ${constentCss};
  height: 40px;
  margin-top: 2px;
  ${ellipsisMultiCss};
  -webkit-line-clamp: 2;
`;

const From = styled.div`
  ${fromCss};
  margin-top: 4px;
`;

const ListLayout = ({ page }: { page: number; }) => {
  const posts = usePostsOfThisPage(page);
  const totalPage = useCurrentPage();
  const isCurrentPage = totalPage === page;

  return (
    <Wrapper isCurrentPage={isCurrentPage}>
      {
        posts?.map((v) => (
          <PostWrapper key={v?.id} href={v?.link} target="_blank">
            <StyledZoomingImg src={v?.imgUrl} />
            <ContentWrapper>
              <Category category={v?.category}>{v?.subCategory}</Category>
              <Title>{v?.title}</Title>
              <Content>{v?.content}</Content>
              <From>{v?.from}</From>
            </ContentWrapper>
          </PostWrapper>
        ))
      }
    </Wrapper>
  );
};

export default ListLayout;
