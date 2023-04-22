import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminParticipant from '../../pages/admin/participant/Index';
import AdminSession from '../../pages/admin/session/Index';
import Default from '../../pages/Default';
import AdminLayout from '../layout/AdminLayout';
import ErrorPage from '../../pages/error/ErrorPage';

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="participants" element={<AdminParticipant />} />
        <Route path="sessions" element={<AdminSession />} />
        <Route index element={<Default />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
