import { CSSProperties } from "react";
import Footer from "../../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import css from "./MainFooter.module.css";
import { useTranslation } from "react-i18next";

function MainFooter() {
  const { t } = useTranslation();
  const iconStyle: CSSProperties = {
    color: "#eef0f6",
    height: 31,
    width: 31,
    display: "inline-block",
  };

  return (
    <Footer>
      <p className={css.title}>{t("footer.title")}</p>
      <div className={css.iconsContainer}>
        <FontAwesomeIcon icon={faSquareFacebook} style={iconStyle} />
        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
      </div>
    </Footer>
  );
}

export default MainFooter;
