import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminParticipant from '../../pages/admin/participant/Index';
import AdminSession from '../../pages/admin/session/Index';
import Default from '../../pages/Default';
import AdminLayout from '../layout/AdminLayout';
import ErrorPage from '../../pages/error/ErrorPage';
import SessionCreate from '../../pages/admin/session/Create';
import { URL } from '../../common/constant';
import UserLayout from '../layout/UserLayout';
import SessionOnTime from '../../pages/user/session/OnTime';
import SessionClosed from '../../pages/user/session/Closed';
import ClientLayout from '../layout/ClientLayout';
import Detail from '../../pages/user/session/Detail';


export default function MyRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path={URL.admin.participant.list} element={<AdminParticipant />} />
        <Route path={URL.admin.session.list} element={<AdminSession />} />
        <Route path={URL.admin.session.create} element={<SessionCreate />} />
      </Route>
      <Route path="/" element={<UserLayout />}>
        <Route path={URL.user.session.onTime} element={<SessionOnTime />} />
        <Route path={URL.user.session.closed} element={<SessionClosed />} />
        <Route path={URL.user.session.onTimeDetail} element={<Detail />} />
        <Route path={URL.user.session.closedDetail} element={<Detail />} />
      </Route>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Default />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
