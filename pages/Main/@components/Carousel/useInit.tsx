import React, {createRef, useEffect} from "react";

const useInit = ({ setListARefs, setListA, items, canInitListA, listARefs }) => {
  // 1. ListARefs init
  useEffect(() => {
    if (items) {
      setListARefs(items?.map(() => createRef()));
    };
  }, [items]);

  // 2. listPrev init
  useEffect(() => {
    if (canInitListA) {
      setListA(() => {
        return items?.map((comp, idx) => {
          return (<div key={`crs-${idx}`} ref={listARefs[idx]}>{comp}</div>);
        });
      });
    }
  }, [canInitListA]);
};

export default useInit;
