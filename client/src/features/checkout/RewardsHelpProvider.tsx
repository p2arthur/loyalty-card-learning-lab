import { useReducer, type ReactNode } from "react";
import { RewardsContext, type RewardsHelpAction } from "./RewardsContext";

function rewardsHelpReducer(
  isOpen: boolean,
  action: RewardsHelpAction,
): boolean {
  switch (action.type) {
    case "open":
      return true;
    case "close":
      return false;
    default:
      return isOpen;
  }
}

type RewardsHelpProviderProps = { children: ReactNode };

export default function RewardsHelpProvider({
  children,
}: RewardsHelpProviderProps) {
  const [isRewardsHelpOpen, dispatch] = useReducer(rewardsHelpReducer, false);

  return (
    <RewardsContext.Provider value={{ isRewardsHelpOpen, dispatch }}>
      {children}
    </RewardsContext.Provider>
  );
}
