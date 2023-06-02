import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentAccountLogined, logIn, logOut } from '../../common/MetaMask';
import BtnLogin from './Header/BtnLogin';
import BtnLogout from './Header/BtnLogout';
import Web3 from 'web3';

export default function Header() {
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    getCurrentAccountAuth();
  }, []);

  // Get current account logined.
  const getCurrentAccountAuth = async () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);


    // if (typeof web3.currentProvider.disconnect === 'function') {
      // const a = await web3.currentProvider.disconnect();
    // }
  

    // console.log(a);
    console.log(typeof web3.currentProvider.disconnect);
    // const data = getCurrentAccountLogined();

    // if (data.isSuccess) {
    //   setCurrentAccount(data.data);
    // } else {
    //   toast(data.data);
    //   setCurrentAccount(null);
    // }
  }

  // Login
  const metaMaskLogin = async () => {
    const data = await logIn();

    if (data.isSuccess) {
      toast('Loggin success!');
      setCurrentAccount(data.data);
    } else {
      toast(data.data);
      setCurrentAccount(null);
    }
  }

  // logout
  const logout = async () => {
    logOut();
    setCurrentAccount(null);
    window.location.href = "/";
  }

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="col-md-3 col-lg-2 me-0 px-3 fs-6">
          <NavLink className="text-decoration-none" to="/">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Icon" />
            <span className="align-middle px-1 text-white">Product Pricing System</span>
          </NavLink>
        </div>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            {
              currentAccount
                ? <BtnLogout handleAccountSignOut={logout} />
                : <BtnLogin metaMaskAuth={metaMaskLogin} />
            }
          </div>
        </div>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
