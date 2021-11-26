// * React * //
import React from 'react';
// * Test * //
import {
  render,
  screen,
  fireEvent,
  userEvent,
  waitFor,
} from '@testing-library/react';
// * Component * //
import Login from '../Screens/Login';
import { act } from 'react-dom/test-utils';

jest.mock('react-router-dom', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useNavigate: jest.fn(() => 'bar'),
  };
});

describe('Login Component:', () => {
  describe('Title Component:', () => {
    it('Have Title Login', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByText('Login')).toBeInTheDocument();
    });

    it('Title Have Style', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByTestId('login')).toHaveStyle({
        color: '#E0E0E0',
        fontFamily: 'Mark Pro',
        fontSize: '30px',
      });
    });
  });

  describe('Inputs Component:', () => {
    it('Have Two Inputs', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByTestId('input-user')).toBeInTheDocument();
      expect(screen.getByTestId('input-password')).toBeInTheDocument();
    });

    it('Have Two Icons', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByTestId('icon-user')).toBeInTheDocument();
      expect(screen.getByTestId('icon-password')).toBeInTheDocument();
    });

    it('Input Have Style', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByTestId('input-user')).toHaveStyle({
        width: '310px',
        borderRadius: '50px',
        color: '#E0E0E0',
      });
      expect(screen.getByTestId('input-password')).toHaveStyle({
        width: '310px',
        borderRadius: '50px',
        color: '#E0E0E0',
      });
    });

    it('Updates onChange', () => {
      const { getByTestId } = render(<Login />);

      const user = getByTestId('input-user');
      const password = getByTestId('input-password');

      fireEvent.change(user, { target: { value: 'davi@furg.br' } });
      fireEvent.change(password, { target: { value: '1@5aeD38' } });

      expect(user.value).toBe('davi@furg.br');
      expect(password.value).toBe('1@5aeD38');
    });
  });

  describe('Button Component:', () => {
    it('Have Button', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByTestId('button-login')).toBeInTheDocument();
    });

    it('Have Text "Continuar" in button', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByText('Continuar')).toBeInTheDocument();
    });
    it('Button Have Style', () => {
      act(() => {
        render(<Login />);
      });

      expect(screen.getByTestId('button-login')).toHaveStyle({
        background: 'linear-gradient(90deg, #FF2D04 0%, #C13216 100%)',
        width: '379px',
        borderRadius: '50px',
        height: '67px',
        cursor: 'pointer',
        border: 'none',
      });
    });

    it('OnSubmit Click', () => {
      test('Clicking the submit button after entering values', () => {
        const handleSubmit = jest.fn();
        const submitButtonNode = render(<Login />).getByTestId('button-login');
        fireEvent.click(submitButtonNode);
        expect(handleSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
