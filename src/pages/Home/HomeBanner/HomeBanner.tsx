import Container from "../../../components/Container/Container";
import Banner from "../../../components/Banner/Banner";
import img from "./background.png";
import css from "./HomeBanner.module.css";
import { useTranslation } from "react-i18next";

function HomeBanner() {
  return (
    <Container backgroundImage={img} fullHeight={true}>
      <div className={css.content}>
        <Banner />
      </div>
    </Container>
  );
}

export default HomeBanner;
