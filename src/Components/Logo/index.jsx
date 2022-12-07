import logo from "../../assets/images/logo.svg";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const StyledLogoImage = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledLogoImage src={logo} alt="Logo Alura Books" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </StyledLogo>
  );
}

export default Logo;
