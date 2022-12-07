import Input from "../Input";
import styled from "styled-components";

const StyledSearch = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const StyledCaption = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Search() {
  return (
    <StyledSearch>
      <StyledTitle>Já sabe por onde começar?</StyledTitle>
      <StyledCaption>Encontre seu livro em nossa estante</StyledCaption>
      <Input placeholder="Escreva sua próxima leitura" />
    </StyledSearch>
  );
}

export default Search;
