import React from 'react';
import { Gitlab } from "react-feather";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Icon" />
          <span className="align-middle px-1">Product Pricing System</span>
        </div>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <button className="nav-link px-3">
              <Gitlab width={18} height={18} />
              <span className="align-middle px-1">Sign in</span>
            </button>
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
