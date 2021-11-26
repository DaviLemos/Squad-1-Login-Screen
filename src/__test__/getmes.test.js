import getmes from '../Components/helper/getmes.helper';

describe('getmes function', () => {
  it('1 to equal Janeiro', () => {
    expect(getmes(1)).toEqual('Janeiro');
  });
  it('2 to equal Feveiro', () => {
    expect(getmes(2)).toEqual('Fevereiro');
  });
  it('3 to equal Março', () => {
    expect(getmes(3)).toEqual('Março');
  });
  it('4 to equal Abril', () => {
    expect(getmes(4)).toEqual('Abril');
  });
  it('5 to equal Maio', () => {
    expect(getmes(5)).toEqual('Maio');
  });
  it('6 to equal Junho', () => {
    expect(getmes(6)).toEqual('Junho');
  });
  it('7 to equal Julho', () => {
    expect(getmes(7)).toEqual('Julho');
  });
  it('8 to equal Agosto', () => {
    expect(getmes(8)).toEqual('Agosto');
  });
  it('9 to equal Setembro', () => {
    expect(getmes(9)).toEqual('Setembro');
  });
  it('10 to equal Outubro', () => {
    expect(getmes(10)).toEqual('Outubro');
  });
  it('11 to equal Novembro', () => {
    expect(getmes(11)).toEqual('Novembro');
  });
  it('12 to equal Dezembro', () => {
    expect(getmes(12)).toEqual('Dezembro');
  });
});
