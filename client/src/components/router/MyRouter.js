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
import AuthMiddleware from '../../middleware/AuthMiddleware';
import SignUp from '../../pages/account/SignUp';

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AuthMiddleware><AdminParticipant /></AuthMiddleware>} />
        <Route path={URL.admin.participant.list} element={<AuthMiddleware><AdminParticipant /></AuthMiddleware>} />
        <Route path={URL.admin.session.list} element={<AuthMiddleware><AdminSession /></AuthMiddleware>} />
        <Route path={URL.admin.session.create} element={<AuthMiddleware><SessionCreate /></AuthMiddleware>} />
      </Route>
      <Route path="/" element={<UserLayout />}>
        <Route path={URL.user.session.onTime} element={<AuthMiddleware><SessionOnTime /></AuthMiddleware>} />
        <Route path={URL.user.session.closed} element={<AuthMiddleware><SessionClosed /></AuthMiddleware>} />
        <Route path={URL.user.session.onTimeDetail} element={<AuthMiddleware><Detail /></AuthMiddleware>} />
        <Route path={URL.user.session.closedDetail} element={<AuthMiddleware><Detail /></AuthMiddleware>} />
      </Route>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Default />} />
        {/* MYTODO chỉ cho phép người chưa có account , <= 10 user ms có thể đăng kí */}
        <Route path={URL.guest.register} element={<SignUp />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
