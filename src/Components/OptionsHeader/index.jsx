import styled from "styled-components";

const optionsItems = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const StyledListHeader = styled.ul`
  display: flex;
`;

const StyledListItems = styled.li`
  padding: 0 10px;
  cursor: pointer;
`;

function OptionsHeader() {
  return (
    <StyledListHeader>
      {optionsItems.map((item) => (
        <StyledListItems>
          <a href="https://www.alura.com.br/">{item}</a>
        </StyledListItems>
      ))}
    </StyledListHeader>
  );
}

export default OptionsHeader;
