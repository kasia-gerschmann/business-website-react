import css from "./NavbarItem.module.css";
import { PropsWithChildren } from "react";
import classnames from "classnames";

interface Props {
  href?: string;
  disabled?: boolean;
}

function NavbarItem({ href, disabled = false, children }: PropsWithChildren<Props>) {
  const aStyles = classnames({
    [css.link]: true,
    [css.disabled]: disabled,
  });
  return (
    <li>
      <a className={aStyles} href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavbarItem;
