const optionsItems = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OptionsHeader() {
  return (
    <div>
      <ul className="options__list">
        {optionsItems.map((item) => (
          <li className="options__items">
            <a href="https://www.alura.com.br/">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionsHeader;
