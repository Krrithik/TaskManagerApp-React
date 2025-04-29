import React from 'react';
import Login from '../components/Login';
import { Route } from '@tanstack/react-router';
import { rootRoute } from './__root';

export const LoginRoute = new Route({ getParentRoute: () => rootRoute, path: '/login' });

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;