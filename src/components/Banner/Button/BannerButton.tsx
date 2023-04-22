import css from "./BannerButton.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  href?: string;
}

function BannerButton({ href, children }: Props) {
  return (
    <div>
      <a href={href}>
        <button className={css.btn}>{children}</button>
      </a>
    </div>
  );
}

export default BannerButton;
