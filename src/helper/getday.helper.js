function getDayPT(day) {
  const dias = {
    0: 'Domingo',
    1: 'segunda-feira',
    2: 'terça-feira',
    3: 'quarta-feira',
    4: 'quinta-feira',
    5: 'sexta-feira',
    6: 'sábado',
  };
  return dias[day];
}

export default getDayPT;
