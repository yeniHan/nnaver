import Header from './Main/Header';
import TopMenuBar from './Main/TopMenuBar';
import styled from "styled-components";

const Item = styled.div`
  width: 50px;
  height: 30px;
  border: 1px solid red;
`;

const Wrapper = styled.div`
    display: flex;
  justify-content: center;
`;

export default function Main () {
  return (
    <div>
      <Header />
      <TopMenuBar />
    </div>
  );
}
