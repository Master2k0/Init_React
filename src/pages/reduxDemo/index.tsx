import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { decrement, increment } from '@/app/slices/demoSlice';
import { RootState } from '@/app/store';
import { getDemoById, getTokenDemo } from '@/app/thunks/demoThunk';

function Counter() {
  const count = useAppSelector((state: RootState) => state.demo.value);
  const dispatch = useAppDispatch();
  const handleIncreare = () => {
    dispatch(increment());
  };
  const handleDecrease = () => {
    dispatch(decrement());
  };
  useEffect(() => {
    const callAPI = async () => {
      try {
        const data = dispatch(getDemoById({})).unwrap;
        const data1 = await dispatch(getTokenDemo({})).unwrap();
        console.log(data1);
      } catch (e) {
        console.log(e);
      }
    };
    callAPI();
  }, []);
  return (
    <div>
      <div id="increase" onClick={handleIncreare} aria-hidden="true">
        +
      </div>
      {count}
      <div id="decrease" onClick={handleDecrease} aria-hidden="true">
        -
      </div>
    </div>
  );
}

export default Counter;
