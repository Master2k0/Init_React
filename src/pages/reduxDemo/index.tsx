import { useAppSelector } from "@/app/hooks";
import { decrement, increment } from "@/app/slices/demoSlice";
import { RootState } from "@/app/store";
import { useAppDispatch } from "@/app/hooks";

function Counter() {
  const count = useAppSelector((state: RootState) => state.demo.value);
  const dispatch = useAppDispatch();
  const handleIncreare = () => {
    dispatch(increment());
  };
  const handleDecrease = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <div onClick={handleIncreare}>+</div>
      {count}
      <div onClick={handleDecrease}>-</div>
    </div>
  );
}

export default Counter;
