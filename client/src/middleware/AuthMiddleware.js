import { Navigate } from "react-router-dom";
import { getCurrentAccountLogined } from "../common/MetaMask";

export default function AuthMiddleware({ children }) {
  const currentAccount = getCurrentAccountLogined();
// MYTODO: neu lan dau dang ki thi ms dc tuy cap vao day, kt thong tin co trong users chua
  if (currentAccount && currentAccount.data && currentAccount.data != null) {
    return children;
  } else {
    return <Navigate to="/" />
  }
}
