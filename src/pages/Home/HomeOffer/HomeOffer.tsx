import Container from "../../../components/Container/Container";
import css from "./HomeOffer.module.css";
import Tile from "../../../components/Tile/Tile";
import Title from "../../../components/Title/Title";
import { SERVICES } from "../../../data/dataServices";
import { useTranslation } from "react-i18next";

function HomeOffer() {
  const { t } = useTranslation();
  return (
    <Container variant="blue" id="oferta">
      <Title variant="white">{t("offer.title")}</Title>
      <div className={css.grid}>
        {SERVICES.map(({ name, isNew }) => (
          <Tile isNew={isNew} key={name}>{t(`service.${name}`)}</Tile>
        ))}
      </div>
    </Container>
  );
}

export default HomeOffer;
