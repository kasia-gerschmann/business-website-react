import css from "./Footer.module.css";
import { PropsWithChildren } from "react";


function Footer({ children }: PropsWithChildren) {
  return <footer className={css.footer}>{children}</footer>;
}

export default Footer;
