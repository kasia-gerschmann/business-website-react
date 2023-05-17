import classnames from "classnames";
import { CSSProperties, PropsWithChildren } from "react";
import css from "./Container.module.css";

interface Props {
  variant?: "white" | "blue";
  backgroundImage?: string;
  id?: string;
  fullHeight?: boolean;
}

function Container({
  variant = "white",
  backgroundImage,
  id,
  fullHeight,
  children,
}: PropsWithChildren<Props>) {
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
