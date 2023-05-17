import css from "./Navbar.module.css";
import { PropsWithChildren } from "react";


function Navbar({ children }: PropsWithChildren) {
  return (
      <nav>
        <ul className={css.mainNavList}>{children}</ul>
      </nav>
  );
}

export default Navbar;
