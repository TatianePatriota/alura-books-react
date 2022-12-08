import { books } from "./lastReleases.js";
import styled from "styled-components";
import StyledTitle from "../Title";

const StyledLastReleases = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledRealeases = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastReleases() {
  return (
    <StyledLastReleases>
      <StyledTitle cor="#eb9b00" tamanhoFonte="36px">
        ÚLTIMOS LANÇAMENTOS
      </StyledTitle>
      <StyledRealeases>
        {books.map((book) => (
          <img src={book.src} alt={book.nome} />
        ))}
      </StyledRealeases>
    </StyledLastReleases>
  );
}

export default LastReleases;
