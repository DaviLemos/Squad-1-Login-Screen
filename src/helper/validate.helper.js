const validate = (values) => {
  const errors = {};
  if (!values.senha) {
    errors.senha = '';
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(values.senha)
  ) {
    errors.senha = 'Ops, senha inválido';
  }

  if (!values.usuario) {
    errors.usuario = '';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.usuario)
  ) {
    errors.usuario = 'Ops, email inválido';
  }

  return errors;
};

export default validate;
