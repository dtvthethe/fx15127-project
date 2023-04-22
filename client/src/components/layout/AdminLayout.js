import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Loading from '../tiny/Loading';

export default function AdminLayout() {
  // use redux
  const isShowLoading = false;

  return (
    <>
      {isShowLoading ? <Loading /> : null}
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Menu />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
