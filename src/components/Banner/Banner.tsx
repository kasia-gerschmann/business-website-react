import css from "./Banner.module.css";
import { ReactNode } from "react";
import BannerButton from "./Button/BannerButton";

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  buttonTitle?: ReactNode;
  href?: string;
}

function Banner({ title, subtitle, buttonTitle, href }: Props) {
  return (
    <div className={css.banner}>
      <h1 className={css.h1}>{title}</h1>
      <h3 className={css.h3}>{subtitle}</h3>
      <BannerButton href={href}>{buttonTitle}</BannerButton>
    </div>
  );
}

export default Banner;
