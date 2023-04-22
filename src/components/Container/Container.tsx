import classnames from "classnames";
import { CSSProperties, ReactNode } from "react";
import css from "./Container.module.css";

interface Props {
  variant?: "white" | "blue";
  backgroundImage?: string;
  children?: ReactNode;
  id?: string;
  fullHeight?: boolean;
}

function Container({
  variant = "white",
  backgroundImage,
  id,
  fullHeight,
  children,
}: Props) {
  const containerClass = classnames({
    [css.container]: true,
    [css.white]: variant === "white",
    [css.blue]: variant === "blue",
    [css.shadow]: !!backgroundImage,
    [css.fullHeight]: fullHeight,
  });

  const containerStyle: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={containerClass} style={containerStyle} id={id}>
      <div className={css.innerContainer}>{children}</div>
    </div>
  );
}

export default Container;
