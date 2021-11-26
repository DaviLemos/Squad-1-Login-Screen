import React from 'react';
import HorarioEDataAtual from '../Components/HorarioEDataAtual/HorarioEDataAtual';
import { render, screen } from '@testing-library/react';
import getmes from '../Components/helper/getmes.helper';
import getday from '../Components/helper/getday.helper';

describe('HorarioEDataAtual Component', () => {
  // Valores injetados para testes
  const data = new Date();
  const horarioEData = {
    hora: `${data.getHours()}:${
      data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
    }`,
    day: data.getDay(),
    diaNumerico: data.getDate(),
    mes: `${
      data.getMonth() + 1 < 10 ? `0${data.getMonth() + 1}` : data.getMonth() + 1
    }`,
    year: data.getFullYear(),
  };
  const date = `${getday(horarioEData.day)}, ${
    horarioEData.diaNumerico
  } de ${getmes(horarioEData.mes)} de ${horarioEData.year}`;

  describe('Hour Component', () => {
    it('Hour Is it Rendering?', () => {
      render(<HorarioEDataAtual />);
      expect(screen.getByTestId('hora')).toBeInTheDocument();
    });

    it('Hora Style', () => {
      render(<HorarioEDataAtual />);
      expect(screen.getByTestId('hora')).toHaveStyle({
        fontFamily: 'Mark Pro',
        fontStyle: 'normal',
        color: '#222222',
        textAlign: 'center',
        margin: '0px',
        fontWeight: 'bold',
        fontSize: '144px',
        lineHeight: '183px',
        weight: '700',
      });
    });

    it('Is the time right?', () => {
      render(<HorarioEDataAtual />);
      expect(screen.getByText(horarioEData.hora)).toBeInTheDocument();
    });

    it('Is the date right?', () => {
      render(<HorarioEDataAtual />);
      expect(screen.getByText(date)).toBeInTheDocument();
    });

    describe('Date Component', () => {
      it('Date Is it Rendering?', () => {
        render(<HorarioEDataAtual />);
        expect(screen.getByTestId('data')).toBeInTheDocument();
      });

      it('Hora Style', () => {
        render(<HorarioEDataAtual />);
        expect(screen.getByTestId('data')).toHaveStyle({
          fontFamily: 'Mark Pro',
          fontStyle: 'normal',
          color: '#222222',
          textAlign: 'center',
          margin: '-40px',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '18px',
          weight: '400',
        });
      });
    });
  });
});
