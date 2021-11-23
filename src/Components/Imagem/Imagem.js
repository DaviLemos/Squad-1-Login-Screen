import styled from 'styled-components';

const Imagem = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  background: ${({ url }) => `url(${url}) no-repeat`};
  background-size: 100% 100%;
`;

export default Imagem;
