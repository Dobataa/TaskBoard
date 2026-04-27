import { createContext, useContext } from "react";

export type SnackbarType = "success" | "error" | "info" | "warning";

type SnackbarContextType = {
  showSnackbar: (message: string, type: SnackbarType) => void;
};

export const SnackbarContext = createContext<SnackbarContextType | null>(null);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) throw new Error("useSnackbar must be used inside provider");
  return context;
};