import React from 'react';
import { LogOut } from "react-feather";

export default function BtnLogout(props) {
  const handleAccountSignOut = props.handleAccountSignOut;

  return (
    <button className="nav-link px-3 text-white" onClick={() => handleAccountSignOut()}>
      <LogOut width={18} height={18} />
      <span className="align-middle px-1">Disconnect MetaMask</span>
    </button>
  );
}
