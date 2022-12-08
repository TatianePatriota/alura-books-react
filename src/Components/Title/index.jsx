import styled from "styled-components";

const StyledTitle = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: ${(props) => props.cor || "#000000"};
  font-size: ${(props) => props.tamanhoFonte || "18px"};
  text-align: center;
  margin: 0;
`;

export default StyledTitle;
