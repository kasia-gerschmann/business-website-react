import Container from "../../../components/Container/Container";
import Banner from "../../../components/Banner/Banner";
import img from "./background.png";
import css from "./HomeBanner.module.css";

function HomeBanner() {
  return (
    <Container backgroundImage={img} fullHeight={true}>
      <div className={css.content}>
        <Banner
          title="Nasza firma oferuje najwyższej jakości produkty."
          subtitle="Nie wierz nam na słowo - sprawdź"
          href="#oferta"
          buttonTitle="oferta"
        />
      </div>
    </Container>
  );
}

export default HomeBanner;
