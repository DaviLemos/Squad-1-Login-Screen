import React from 'react';
import getDayPT from '../helper/getday.helper';
import getMesPT from '../helper/getmes.helper';
import { StyleParagraph } from './HorarioEDataAtual-style';

const HorarioEDataAtual = () => {
  const [data, setData] = React.useState(new Date());
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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <StyleParagraph
        ftWeight="bold"
        ftSize="144px"
        lnHeight="183px"
        weight="700"
        margin="0"
      >
        {`${new Date().getHours()}:${
          new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : new Date().getMinutes()
        }`}
      </StyleParagraph>
      <StyleParagraph
        ftWeight="normal"
        ftSize="14px"
        lnHeight="18px"
        weight="400"
        margin="-40px"
      >{`${getDayPT(horarioEData.day)}, ${
        horarioEData.diaNumerico
      } de ${getMesPT(horarioEData.mes)} de ${
        horarioEData.year
      }`}</StyleParagraph>
    </div>
  );
};

export default HorarioEDataAtual;
