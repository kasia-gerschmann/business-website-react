import { ReactNode } from "react";
import css from "./Title.module.css";
import classnames from "classnames";

interface Props {
  children?: ReactNode;
  variant?: "white" | "navy";
  responsive?: boolean;
}

function Title({ variant = "navy", responsive = true, children }: Props) {
  const titleClass = classnames({
    [css.title]: true,
    [css.white]: variant === "white",
    [css.navy]: variant === "navy",
    [css.responsive]: responsive,
  });

  return <h2 className={titleClass}>{children}</h2>;
}

export default Title;
