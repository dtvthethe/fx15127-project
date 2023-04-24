import React from 'react';
import { Package, Users } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { URL } from '../../common/constant';

export default function Menu() {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <p className="px-3">
              <Users width={18} height={18} />
              <NavLink to={URL.admin.participant.list} className="align-middle px-1 text-decoration-none text-dark">Participants</NavLink>
            </p>
          </li>
          <li className="nav-item">
            <p className="px-3">
              <Package width={18} height={18} />
              <NavLink to={URL.admin.session.list} className="align-middle px-1 text-decoration-none text-dark">Sessions</NavLink>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
