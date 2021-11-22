import React from 'react';
import getDayPT from '../helper/getday.helper';
import getMesPT from '../helper/getmes.helper';
import { StyleParagraph } from './HorarioEDataAtual-style';

const HorarioEDataAtual = () => {
  const data = new Date();
  // Objeto que agrupa os dados relacionados a data e hora atuais
  const horarioEData = {
    hora: `${data.getHours()}:${data.getMinutes()}`,
    day: data.getDay(),
    diaNumerico: data.getDate(),
    mes: `${
      data.getMonth() + 1 < 10 ? `0${data.getMonth() + 1}` : data.getMonth() + 1
    }`,
    year: data.getFullYear(),
  };

  return (
    <div>
      <StyleParagraph
        ftWeight="bold"
        ftSize="144px"
        lnHeight="183px"
        weight="700"
        margin="0"
      >
        {horarioEData.hora}
      </StyleParagraph>
      <StyleParagraph
        ftWeight="normal"
        ftSize="14px"
        lnHeight="18px"
        weight="400"
        margin="-40px 0"
      >{`${getDayPT(horarioEData.day)}, ${
        horarioEData.diaNumerico
      } de ${getMesPT(horarioEData.mes)} de ${
        horarioEData.year
      }`}</StyleParagraph>
    </div>
  );
};

export default HorarioEDataAtual;
