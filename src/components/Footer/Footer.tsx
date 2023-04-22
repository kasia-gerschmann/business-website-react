import css from "./Footer.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Footer({ children }: Props) {
  return <footer className={css.footer}>{children}</footer>;
}

export default Footer;
