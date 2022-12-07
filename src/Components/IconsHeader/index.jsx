import perfil from "../../assets/images/perfil.svg";
import sacola from "../../assets/images/sacola.svg";

const icons = [perfil, sacola];

function IconsHeader() {
  return (
    <div>
      <ul className="options__icons">
        {icons.map((icon) => (
          <li className="icons">
            <img src={icon} alt="Ícones" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IconsHeader;
