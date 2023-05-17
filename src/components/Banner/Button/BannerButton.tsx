import css from "./BannerButton.module.css";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  href?: string;
}

function BannerButton({ href, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <a href={href} className={css.btn}>
       {children}
      </a>
    </div>
  );
}

export default BannerButton;
