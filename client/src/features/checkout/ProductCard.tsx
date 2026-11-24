import { useEffect } from "react";
import useCounter from "../../counter";

export default function ProductCard({
  cardTitle,
  cardDescription,
}: {
  cardTitle: string;
  cardDescription: string;
}) {
  const { count, addCount } = useCounter();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running every 2 seconds");
    }, 2000);

    return () => {
      console.log("Cleaning interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <p>{count}</p>
        <div>
          <h1>{cardTitle}ssss</h1>
        </div>
        <div>
          <h3>{cardDescription}</h3>
          <button onClick={addCount}>addCount</button>
        </div>
      </div>
    </>
  );
}
