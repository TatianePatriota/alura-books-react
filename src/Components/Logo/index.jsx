import logo from "../../assets/images/logo.svg";
import "../../styles.css";
// import styled from "styled-components";

// const styledLogo = styled.div`
//   display: flex;
//   font-size: 30px;
// `;

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="Logo Alura Books"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
