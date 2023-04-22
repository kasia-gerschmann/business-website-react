import { CSSProperties } from "react";
import css from "./ImageWithDescription.module.css";

interface Props {
  name?: string;
  department?: string;
  description?: string;
  image?: string;
}

function ImageWithDescription({ name, department, description, image }: Props) {
  const imgStyle: CSSProperties = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className={css.grid}>
      <div className={css.image} style={imgStyle}></div>
      <div className={css.details}>
        <p className={css.title}>
          {name} [{department}]
        </p>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
}

export default ImageWithDescription;
