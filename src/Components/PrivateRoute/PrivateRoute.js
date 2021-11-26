import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ls from 'local-storage';

const PrivateRoute = () => {
  const auth = ls.get('token');

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
