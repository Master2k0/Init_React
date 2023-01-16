import { useAppSelector } from "@/app/hooks";
import { decrement, increment } from "@/app/slices/demoSlice";
import { RootState } from "@/app/store";
import { useAppDispatch } from "@/app/hooks";
import { useEffect } from "react";
import { getDemoById } from "@/app/thunks/demoThunk";

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
    dispatch(getDemoById({})).unwrap;
  }, []);
  return (
    <div>
      <div onClick={handleIncreare}>+</div>
      {count}
      <div onClick={handleDecrease}>-</div>
    </div>
  );
}

export default Counter;
