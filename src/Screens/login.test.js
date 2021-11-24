import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

// Verifica se os componentes estão sendo renderizados corretamente
describe('Login', () => { // Conjunto de testes
  test('Deve renderizar os campos básicos', () => { // caso de teste
    render(<Login />);
    screen.getByRole('textbox', { name: '' });
    screen.getByRole('button', { name: 'Continuar' });
  });
});