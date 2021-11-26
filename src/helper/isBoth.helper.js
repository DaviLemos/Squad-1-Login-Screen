function isBoth(erros) {
  // if (erros.senha === 'Required' || erros.usuario === 'Required') {
  //   return '';
  // } else
  if (erros.senha && erros.usuario) {
    return 'usuário e senha invalidos';
  } else if (erros.senha) {
    return 'senha inválida';
  } else if (erros.usuario) {
    return 'usuário inválido';
  }
}

export default isBoth;
