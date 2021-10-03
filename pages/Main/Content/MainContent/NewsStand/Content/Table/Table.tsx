import React, { useMemo} from 'react';
import styled from 'styled-components';
import Td from './Td';
import useArticlesAndMedias from "../@hooks/useArticlesAndMedias";

const Wrapper = styled.table`     
  width: 100%;         
`;

const Tr = styled.tr`
  display: flex;
`;

const Table = () => {
  const { medias } = useArticlesAndMedias();


  const mediaTables = useMemo(() => {
    const tmp = [[],[], [], []];
    const rowNum = 4;
    const cellNum = 4;
    const totalCellNum = rowNum * cellNum;

    new Array(totalCellNum)?.fill(0)?.forEach((_, i) => {
      const tmpIdx = Math.floor(i/rowNum);
      const item = medias?.[i];
      tmp[tmpIdx]?.push(item);
    });
    return tmp;
  }, [medias]);

  return (
    <Wrapper>
      {mediaTables?.map((rowMedias) => (
        <Tr key={rowMedias?.[0]?.name}>
          {rowMedias?.map((media) => (
            <Td key={media?.id} media={media}/>
          ))}
        </Tr>))
      }
    </Wrapper>
  );
};

export default Table;
