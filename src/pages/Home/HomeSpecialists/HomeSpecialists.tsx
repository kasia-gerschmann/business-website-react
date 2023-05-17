import Container from "../../../components/Container/Container";
import css from "./HomeSpecialists.module.css";
import ImageWithDescription from "../../../components/ImageWithDescription/ImageWithDescription";
import Title from "../../../components/Title/Title";
import { SPECIALISTS } from "../../../data/dataSpecialists";
import { useTranslation } from "react-i18next";

function HomeSpecialists() {
  const { t } = useTranslation();
  return (
    <Container variant="white" id="about">
      <Title variant="navy" responsive={false}>
        {t("specialists.title")}
      </Title>
      <div className={css.grid}>
        {SPECIALISTS.map(({ image, name, department, description }) => (
          <ImageWithDescription
            image={image}
            name={name}
            department={department}
            description={description}
            key={name}
          />
        ))}
      </div>
    </Container>
  );
}

export default HomeSpecialists;
