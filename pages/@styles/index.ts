import { css } from 'styled-components';

export const ellipsisCss = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ellipsisMultiCss = css`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
