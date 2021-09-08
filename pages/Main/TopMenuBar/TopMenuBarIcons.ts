import styled from 'styled-components';
import { commonIconCSS } from '../@styles/index';

const MailIc = styled.div`
  ${commonIconCSS};
  width: 21px;
  height: 21px;
  background-position: -420px -279px;
  display: inline-block;
  margin-right: 9px;
`;

const ShoppingLiveIc = styled.div`
  ${commonIconCSS};
  width: 54px;
  height: 20px;
  background-position: -202px -306px;
  display: inline-block;
`;

const PlayIc = styled.div`
  ${commonIconCSS};
  width: 12px;
  height: 14px;
  background-position: -256px -212px;
  display: inline-block;
  margin-right: 4px;
`;

export default {
  ['1']: MailIc,
  ['6']: ShoppingLiveIc,
  ['7']: PlayIc,
};