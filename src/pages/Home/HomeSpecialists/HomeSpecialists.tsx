import Container from "../../../components/Container/Container";
import css from "./HomeSpecialists.module.css";
import ImageWithDescription from "../../../components/ImageWithDescription/ImageWithDescription";
import Title from "../../../components/Title/Title";
import { SPECIALISTS } from "../../../data/data";

function HomeSpecialists() {
  return (
    <Container variant="white" id="about">
      <Title variant="navy" responsive={false}>
        Nasi specjaliści
      </Title>
      <div className={css.grid}>
        {SPECIALISTS.map(({ image, name, department, description }) => (
          <ImageWithDescription
            image={image}
            name={name}
            department={department}
            description={description}
          />
        ))}
      </div>
    </Container>
  );
}

export default HomeSpecialists;
