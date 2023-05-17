import Header from "../../../components/Header/Header";
import Navbar from "../../../components/Navbar/Navbar";
import css from "./MainHeader.module.css";
import NavbarItem from "../../../components/Navbar/Item/NavbarItem";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../../../components/Navbar/LanguageSwitch/NavbarSwitch";

function MainHeader() {
  const { t } = useTranslation();
  return (
    <Header>
      <h1 className={css.logo}>Business Consulting Group</h1>
      <Navbar>
        <NavbarItem href="#about">{t("navbar.about")}</NavbarItem>
        <NavbarItem href="#oferta">{t("navbar.offer")}</NavbarItem>
        <NavbarItem disabled={true}>{t("navbar.contact")}</NavbarItem>
        <LanguageSwitch />
      </Navbar>
    </Header>
  );
}

export default MainHeader;
