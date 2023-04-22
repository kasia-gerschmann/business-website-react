import { CSSProperties } from "react";
import Footer from "../../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import css from "./MainFooter.module.css";

function MainFooter() {
  const title = "Nazwa firmy - wszelkie prawa zastrzeżone, 2019";
  const iconStyle: CSSProperties = {
    color: "#eef0f6",
    height: 31,
    width: 31,
    display: "inline-block",
  };

  return (
    <Footer>
      <p className={css.title}>{title}</p>
      <div className={css.iconsContainer}>
        <FontAwesomeIcon icon={faSquareFacebook} style={iconStyle} />
        <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
      </div>
    </Footer>
  );
}

export default MainFooter;
