import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 120px;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </StyledHeader>
  );
}

export default Header;
