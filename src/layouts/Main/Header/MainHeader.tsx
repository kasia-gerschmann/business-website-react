import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import css from "./MainHeader.module.css";
import NavbarItem from "../../../components/Navbar/Item/NavbarItem";

function MainHeader() {
  return (
    <Header>
      <h1 className={css.logo}>Business Consulting Group</h1>
      <Navbar>
        <NavbarItem href="#about">o nas</NavbarItem>
        <NavbarItem href="#oferta">oferta</NavbarItem>
        <NavbarItem disabled={true}>kontakt</NavbarItem>
      </Navbar>
    </Header>
  );
}

export default MainHeader;
