import { books } from "./lastReleases.js";
import styled from "styled-components";

const StyledLastReleases = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
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
      <StyledTitle>ÚLTIMOS LANÇAMENTOS</StyledTitle>
      <StyledRealeases>
        {books.map((book) => (
          <img src={book.src} alt={book.nome} />
        ))}
      </StyledRealeases>
    </StyledLastReleases>
  );
}

export default LastReleases;
