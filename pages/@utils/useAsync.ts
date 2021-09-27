import { useReducer, useCallback, useEffect } from 'react';

type State = {
  loading: boolean;
  data: any;
  error: boolean;
}

type Action = {
  type: string;
  data?: any;
  error?: any;
};

function reducer (state: State, action: Action) {
  switch (action.type) {
  case 'LOADING':
    return {
      loading: true,
      data: null,
      error: null
    };
  case 'SUCCESS':
    return {
      loading: false,
      data: action.data,
      error: null
    };
  case 'ERROR':
    return {
      loading: false,
      data: null,
      error: action.error
    };
  default:
    throw new Error(`Unhandled action type: ${action.type}`);
  }
}



function useAsync (callback, args = [], deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback(...args);
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  }, [args]);

  useEffect(() => {
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;