import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../common/constant';

export default function Default() {
  return (
    <>
        Day la trang default <br/>
        <Link to={URL.admin.session.create} >Create session</Link>
    </>
  );
}
