import { Navigate } from "react-router-dom";
import { getCurrentAccountLogined } from "../common/MetaMask";

export default function AuthMiddleware({ children }) {
  const currentAccount = getCurrentAccountLogined();

  if (currentAccount && currentAccount.data && currentAccount.data != null) {
    return children;
  } else {
    return <Navigate to="/" />
  }
}
