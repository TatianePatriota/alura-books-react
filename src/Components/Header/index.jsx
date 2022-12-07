import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";

function Header() {
  return (
    <header className="App__header">
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </header>
  );
}

export default Header;
