import React from 'react';
import { URL } from '../../../common/constant';


export default function Detail() {
  const menuItems = [
    {
      title: 'Session List',
      to: URL.admin.session.list
    },
    {
      title: 'Initiate A Pricing Session',
      to: null
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0">
        <h1 className="h2">Initiate A Pricing Session</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
day la detail user
    </>
  );
}
