// * React * //
import React from 'react';
// * Test * //
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
// * Component * //
import Home from '../Screens/Home';

describe('Home Component:', () => {
  // Grupo de teste
  it('should render the basic fields', () => {
    // O que vai ser testado
    render(<Home />); // renderiza o componente
    screen.getByRole('img', { name: 'Logo Compasso Superior' });
    screen.getByRole('img', { name: 'Logo Compasso' });
    screen.getByRole('img', { name: '' });
    screen.getByRole('button', { name: 'Logout' });
    screen.getByRole('button', { name: 'Continuar Navegando' });
  });

  it('This should show the texts on the screen:', () => {
    // Grupo de teste
    render(<Home />); // renderiza o componente
    const missao_text_1 = screen.getByText('Our mission is');
    const missao_text_2 = screen.getByText('to transform the world');
    const missao_text_3 = screen.getByText('building digital experiences');
    const missao_text_4 = screen.getByText('that enable our client’s growth');
    const missao_pequeno_text_1 = screen.getByText('Nossa missão é');
    const missao_pequeno_text_2 = screen.getByText('transformar o mundo');
    const missao_pequeno_text_3 = screen.getByText(
      'construindo experiências digitais',
    );
    const missao_pequeno_text_4 = screen.getByText(
      'que permitam o crescimento dos nossos clientes',
    );
    const text_logout = screen.getByText('Logout');
    const text_nav_cont = screen.getByText('Continuar Navegando');
    const text_footer = screen.getByText(
      'Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.',
    );
    const ext_refresh = screen.getByText('Application refresh in');
    expect(missao_text_1).toBeInTheDocument();
    expect(missao_text_2).toBeInTheDocument();
    expect(missao_text_3).toBeInTheDocument();
    expect(missao_text_4).toBeInTheDocument();
    expect(missao_pequeno_text_1).toBeInTheDocument();
    expect(missao_pequeno_text_2).toBeInTheDocument();
    expect(missao_pequeno_text_3).toBeInTheDocument();
    expect(missao_pequeno_text_4).toBeInTheDocument();
    expect(text_logout).toBeInTheDocument();
    expect(text_nav_cont).toBeInTheDocument();
    expect(text_footer).toBeInTheDocument();
    expect(ext_refresh).toBeInTheDocument();
  });
});
