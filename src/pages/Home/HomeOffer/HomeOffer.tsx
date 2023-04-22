import Container from "../../../components/Container/Container";
import css from "./HomeOffer.module.css";
import Tile from "../../../components/Tile/Tile";
import Title from "../../../components/Title/Title";
import { SERVICES } from "../../../data/data";

function HomeOffer() {
  return (
    <Container variant="blue" id="oferta">
      <Title variant="white">Czym zajmuje się nasza firma?</Title>
      <div className={css.grid}>
        {SERVICES.map(({ name, isNew }) => (
          <Tile isNew={isNew}>{name}</Tile>
        ))}
      </div>
    </Container>
  );
}

export default HomeOffer;
