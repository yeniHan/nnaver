import { useEffect, useRef } from "react";

function useInterval (callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id = setInterval(() => {
      if(savedCallback) { // @ts-ignore
        savedCallback?.current();
      }
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;

