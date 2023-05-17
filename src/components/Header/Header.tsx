import { PropsWithChildren } from "react";
import css from "./Header.module.css";

function Header({ children }: PropsWithChildren) {
  return <header className={css.header}>{children}</header>;
}

export default Header;
