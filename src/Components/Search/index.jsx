import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./dadosPesquisa";

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

const StyledSearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 130px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Search() {
  const [researchedBooks, setResearchedBooks] = useState([]);

  return (
    <StyledSearch>
      <StyledTitle>Já sabe por onde começar?</StyledTitle>
      <StyledCaption>Encontre seu livro em nossa estante</StyledCaption>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(event) => {
          const typedText = event.target.value;
          const searchResult = books.filter((book) =>
            book.nome.includes(typedText)
          );
          setResearchedBooks(searchResult);
        }}
      />
      {researchedBooks.map((book) => (
        <StyledSearchResult>
          <p>{book.nome}</p>
          <img src={book.src} alt={book.nome} />
        </StyledSearchResult>
      ))}
    </StyledSearch>
  );
}

export default Search;
