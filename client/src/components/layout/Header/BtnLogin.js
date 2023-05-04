import React from 'react';
import { Gitlab } from "react-feather";

export default function BtnLogin(props) {
  const metaMaskAuth = props.metaMaskAuth;

  return (
    <button className="nav-link px-3 text-white" onClick={() => metaMaskAuth()}>
      <Gitlab width={18} height={18} />
      <span className="align-middle px-1">Connect MetaMask</span>
    </button>
  );
}
