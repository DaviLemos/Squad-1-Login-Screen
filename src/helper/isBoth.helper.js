function isBoth(erros) {
  if ((erros.senha === 'Required') | (erros.usuario === 'Required')) {
    return '';
  } else if (erros.senha && erros.usuario) {
    return 'Ops, senha e usuário invalidos.';
  } else if (erros.senha) {
    return 'Ops, senha inválida.';
  } else if (erros.usuario) {
    return 'Ops, usuário inválido.';
  }
}

export default isBoth;
