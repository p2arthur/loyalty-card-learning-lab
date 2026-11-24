import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  return { count, addCount };
}
