// * React * //
import React from 'react';
// * Test * //
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
// * Component * //
import Home from '../Screens/Home';

describe('Home Component:', () => {
  it('should render the basic fields', () => {
    render(<Home />);
    screen.getByRole('img', { name: 'Logo Compasso Superior' });
    screen.getByRole('img', { name: 'Logo Compasso' });
    screen.getByRole('img', { name: '' });
    screen.getByRole('button', { name: 'Logout' });
    screen.getByRole('button', { name: 'Continuar Navegando' });
  });
});
