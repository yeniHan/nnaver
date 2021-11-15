import styled from 'styled-components';
import Img from 'Main/@components/Image';
import { TABLET_WIDTH } from '@constants/MEDIA_WITHES';

// todo: "Styled" doesn't work to <Img />..Find how to apply css to it.
const Banner = styled(Img)`
  width: 100%;
  height: 135px !important;
  cursor: pointer;

  @media (max-width: ${TABLET_WIDTH}) {
    display: none;
  }
`;

export default Banner;