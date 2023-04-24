import React, { useEffect } from 'react';
import Web3 from 'web3';
import { Gitlab } from 'react-feather';

export default function Default() {
  const loginMetaMask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
  }

  // useEffect(() => {
  //   loginMetaMask();
  // }, [])

  return (
    <>
        <button className='btn btn-sm btn-warring' onClick={() => loginMetaMask()}>
          <Gitlab width={18} height={18} className='mt--3' />
          Login with MetaMask
        </button>
    </>
  );
}
