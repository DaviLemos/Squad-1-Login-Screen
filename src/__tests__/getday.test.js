import getday from '../Components/helper/getday.helper';

// Testes da função auxiliar getday
describe('getday function', () => {
  it('0 to equal Domingo', () => {
    expect(getday(0)).toEqual('Domingo');
  });
  it('1 to equal segunda-feira', () => {
    expect(getday(1)).toEqual('segunda-feira');
  });
  it('2 to equal terça-feira', () => {
    expect(getday(2)).toEqual('terça-feira');
  });
  it('3 to equal quarta-feira', () => {
    expect(getday(3)).toEqual('quarta-feira');
  });
  it('4 to equal quinta-feira', () => {
    expect(getday(4)).toEqual('quinta-feira');
  });
  it('5 to equal sexta-feira', () => {
    expect(getday(5)).toEqual('sexta-feira');
  });
  it('6 to equal Julho', () => {
    expect(getday(6)).toEqual('sábado');
  });
});
