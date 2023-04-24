import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminParticipant from '../../pages/admin/participant/Index';
import AdminSession from '../../pages/admin/session/Index';
import Default from '../../pages/Default';
import AdminLayout from '../layout/AdminLayout';
import ErrorPage from '../../pages/error/ErrorPage';
import SessionCreate from '../../pages/admin/session/Create';
import { URL } from '../../common/constant';

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path={URL.admin.participant.list} element={<AdminParticipant />} />
        <Route path={URL.admin.session.list} element={<AdminSession />} />
        <Route path={URL.admin.session.create} element={<SessionCreate />} />
        <Route index element={<Default />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
