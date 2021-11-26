import validate from '../helper/validate.helper';

describe('ValidateHelper', () => {
  it('this should validate senha', () => {
    expect(
      validate({
        usuario: '',
        senha: 'theRock', // Senha com letra maiscula e minuscula
      }),
    ).toEqual({ senha: 'Ops, senha inválido', usuario: '' });
    expect(
      validate({
        usuario: '',
        senha: 'theRock1972', // Senha com letra maiscula, minuscula e numeros
      }),
    ).toEqual({ senha: 'Ops, senha inválido', usuario: '' });
    expect(
      validate({
        usuario: '',
        senha: '', // Senha não preenchida
      }),
    ).toEqual({ senha: '', usuario: '' });
  });
  it('this should validate usuario', () => {
    expect(
      validate({
        usuario: 'theRock@',
        senha: '',
      }),
    ).toEqual({ senha: '', usuario: 'Ops, email inválido' });
    expect(
      validate({
        usuario: 'theRock@gmail',
        senha: '',
      }),
    ).toEqual({ senha: '', usuario: 'Ops, email inválido' });
    expect(
      validate({
        usuario: 'theRock@gmail.',
        senha: '',
      }),
    ).toEqual({ senha: '', usuario: 'Ops, email inválido' });
    expect(
      validate({
        usuario: 'theRock@gmail.c',
        senha: '',
      }),
    ).toEqual({ senha: '', usuario: 'Ops, email inválido' });
  });
});
