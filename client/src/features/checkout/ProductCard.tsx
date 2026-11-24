import { useEffect } from "react";
import useCounter from "../../counter";
import { useRewardsHelp } from "./RewardsContext";
import { createPortal } from "react-dom";

export default function ProductCard({
  cardTitle,
  cardDescription,
  modalTarget,
}: {
  cardTitle: string;
  cardDescription: string;
  modalTarget: HTMLDivElement | null;
}) {
  const { isRewardsHelpOpen, dispatch } = useRewardsHelp();

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
        <div>
          <button onClick={() => dispatch({ type: "open" })}>
            Open portal
          </button>
        </div>
        {isRewardsHelpOpen &&
          modalTarget &&
          createPortal(
            <aside>
              Help neguin{" "}
              <button onClick={() => dispatch({ type: "close" })}>x</button>
            </aside>,
            modalTarget,
          )}
      </div>
    </>
  );
}
