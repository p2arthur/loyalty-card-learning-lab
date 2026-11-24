import { createContext, useContext, type Dispatch } from "react";

export type RewardsHelpAction = { type: "open" } | { type: "close" };

type RewardsHelpValue = {
  isRewardsHelpOpen: boolean;
  dispatch: Dispatch<RewardsHelpAction>;
};

export const RewardsContext = createContext<RewardsHelpValue | null>(null);

export function useRewardsHelp() {
  const context = useContext(RewardsContext);

  if (context == null) {
    throw new Error("useRewardsHelp must be used inside RewardsHelpProvider");
  }

  return context;
}
