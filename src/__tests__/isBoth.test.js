import isBoth from '../helper/isBoth.helper';

describe('ValidateHelper', () => {
  it('this should validate senha', () => {
    expect(
      isBoth({
        usuario: 'rfrodrigues@inf.ufpel.edu.br',
        senha: '19985looP@', // Senha com letra maiscula e minuscula
      }),
    ).toEqual('usuário e senha invalidos');
    expect(
      isBoth({
        usuario: '',
        senha: '199685loop@', // Senha com letra maiscula e minuscula
      }),
    ).toEqual('senha inválida');
    expect(
      isBoth({
        usuario: 'rfrodrigues@inf.ufpel.edu.br',
        senha: '', // Senha com letra maiscula e minuscula
      }),
    ).toEqual('usuário inválido');
  });
});
