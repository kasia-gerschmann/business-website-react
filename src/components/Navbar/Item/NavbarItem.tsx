import css from "./NavbarItem.module.css";
import { ReactNode } from "react";
import classnames from "classnames";

interface Props {
  children?: ReactNode;
  href?: string;
  disabled?: boolean;
}

function NavbarItem({ href, disabled = false, children }: Props) {
  const aClass = classnames({
    [css.link]: true,
    [css.disabled]: disabled,
  });
  return (
    <li>
      <a className={aClass} href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavbarItem;
