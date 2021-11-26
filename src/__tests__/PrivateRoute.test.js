// * React * //
import React from 'react';
// * Test * //
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
// * Component * //
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const token = 'token';

describe('PrivateRoute', () => {
  it('should render PrivateRoute', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute auth={null} />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
