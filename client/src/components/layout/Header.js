import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentAccountLogined, logIn, logOut } from '../../common/MetaMask';
import BtnLogin from './Header/BtnLogin';
import BtnLogout from './Header/BtnLogout';

export default function Header() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentAccountAuth();
  }, []);

  // Get current account logined.
  const getCurrentAccountAuth = () => {
    const resultGetAccount = getCurrentAccountLogined();

    if (!resultGetAccount.isSuccess && resultGetAccount?.data?.message) {
      toast(resultGetAccount.data.message);
    } else {
      if (resultGetAccount.data) {
        setCurrentAccount(resultGetAccount.data);
      }
    }
  }

  // Login
  const metaMaskLogin = async () => {
    const resultSignIn = await logIn();

    if (!resultSignIn.isSuccess && resultSignIn?.data?.message) {
      toast(resultSignIn.data.message);
    } else {
      setCurrentAccount(resultSignIn.data);
    }
  }

  // logout
  const logout = async () => {
    logOut();
    setCurrentAccount(null);
    navigate('/');
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
