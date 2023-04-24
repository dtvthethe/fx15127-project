import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Loading from '../tiny/Loading';

export default function ClientLayout() {
  // use reduxxx
  const isShowLoading = false;

  return (
    <>
      {isShowLoading ? <Loading /> : null}
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <main className="ms-sm-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
