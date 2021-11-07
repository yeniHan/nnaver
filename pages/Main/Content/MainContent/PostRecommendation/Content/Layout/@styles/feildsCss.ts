import { css } from 'styled-components';
import { categoryColors } from '../../../@styles/categoryColors';

export const categegoryCss = css`
  font-size: 12px;
  color: ${({ category}) => categoryColors[category]};
`;

export const titleCss = css`
  font-size: 13px;
  font-weight: bold;
`;

export const constentCss = css`
  font-size: 13px;
  line-height: 21px;
`;

export const fromCss = css`
  color: gray;
  font-size: 12px;
`;
