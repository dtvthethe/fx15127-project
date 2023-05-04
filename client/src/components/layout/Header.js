import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { signIn, getAccount, signOut, clearAccount, clearAccount2 } from '../../common/MetaMask';
import { accountLoginState, noneAccount } from '../../common/constant';
import BtnLogin from './Header/BtnLogin';
import BtnLogout from './Header/BtnLogout';

export default function Header() {
  const [currentAccount, setCurrentAccount] = useState(noneAccount);

 


  useEffect(() => {
    handleAccountAuth();
    window.ethereum.on('disconnect', clearAccount);
    window.ethereum.on('connect', clearAccount2);

    // return () => {
    //   // window.ethereum.off('accountsChanged', accountWasChanged);
    //   // window.ethereum.off('connect', getAndSetAccount);
    //   // window.ethereum.off('disconnect', clearAccount);
    // }
  }, []);

  const metaMaskAuth = async () => {
    const resultSignIn = await signIn();

    if (!resultSignIn.isSuccess && resultSignIn?.data?.message) {
      toast(resultSignIn.data.message);
    } else {
      setCurrentAccount(resultSignIn.data);
    }
  }

  const handleAccountAuth = async () => {
    const resultGetAccount = await getAccount();

    if (!resultGetAccount.isSuccess && resultGetAccount?.data?.message) {
      toast(resultGetAccount.data.message);
    } else {
      setCurrentAccount(resultGetAccount.data);
      console.log(resultGetAccount.data);
    }
  }

  const handleAccountSignOut = async () => {
    // signOut();
    // setCurrentAccount(noneAccount);

    // await window.ethereum.request({
    //     method: "eth_requestAccounts",
    //     params: [{eth_accounts: {}}]
    // });


    // const walletAddress = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    //   params: [
    //     {
    //       eth_accounts: {}
    //     }
    //   ]
    // });

    // if (!isReturningUser) {
    // // Runs only they are brand new, or have hit the disconnect button

    // }
    // const accounts = await window.ethereum.request({ method: 'eth_disconnect' });
console.log(currentAccount, noneAccount, currentAccount === noneAccount);

    // const account = accounts[0]


    // console.log(permissions);
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
            <BtnLogin metaMaskAuth={metaMaskAuth} />
            <BtnLogout handleAccountSignOut={handleAccountSignOut} />
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
