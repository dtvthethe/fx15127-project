import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import Loading from '../tiny/Loading';
import { URL } from '../../common/constant';
import { Clock, Lock } from 'react-feather';

export default function UserLayout() {
  // use reduxxx
  const isShowLoading = false;

  return (
    <>
      {isShowLoading ? <Loading /> : null}
      <div>
        <Header />
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
          <div className="collapse navbar-collapse border-bottom">
            <ul className="navbar-nav mr-auto user-menu">
              <li className="nav-item">
                <NavLink className='nav-link' to={URL.user.session.onTime}>
                  <Clock width={14} height={14} className="mt--3" />
                  On time
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to={URL.user.session.closed}>
                  <Lock width={14} height={14} className="mt--3" />
                  Closed
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
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
