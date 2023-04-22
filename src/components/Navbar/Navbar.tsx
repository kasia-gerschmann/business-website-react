import css from "./Navbar.module.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Navbar({ children }: Props) {
  return (
    <>
      <nav>
        <ul className={css.mainNavList}>{children}</ul>
      </nav>
    </>
  );
}

export default Navbar;
