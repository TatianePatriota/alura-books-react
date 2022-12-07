import perfil from "../../assets/images/perfil.svg";
import sacola from "../../assets/images/sacola.svg";
import styled from "styled-components";

const StyledListIcons = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledIcons = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icons = [perfil, sacola];

function IconsHeader() {
  return (
    <div>
      <StyledListIcons>
        {icons.map((icon) => (
          <StyledIcons>
            <img src={icon} alt="Ícones" />
          </StyledIcons>
        ))}
      </StyledListIcons>
    </div>
  );
}

export default IconsHeader;
