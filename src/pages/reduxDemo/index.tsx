import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { decrement, increment } from '@/app/slices/demoSlice';
import { RootState } from '@/app/store';
import { getDemoById } from '@/app/thunks/demoThunk';

function Counter() {
  const count = useAppSelector((state: RootState) => state.demo.value);
  const dispatch = useAppDispatch();
  const handleIncreare = () => {
    dispatch(increment());
  };
  const a = 2;
  const handleDecrease = () => {
    dispatch(decrement());
  };
  useEffect(() => {
    const data = dispatch(getDemoById({})).unwrap;
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
