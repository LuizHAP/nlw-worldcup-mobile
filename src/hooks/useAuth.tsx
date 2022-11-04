import { useContext } from "react";

import { AuthContext, AuthContextDataProps } from "../contexts/AuthContext";

export function useAuth(): AuthContextDataProps {
  return useContext(AuthContext);
}
