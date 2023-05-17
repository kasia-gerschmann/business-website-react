import css from "./Banner.module.css";
import { ReactNode } from "react";
import BannerButton from "./Button/BannerButton";
import { useTranslation } from "react-i18next";

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  buttonTitle?: ReactNode;
  href?: string;
}

function Banner({ href }: Props) {
  const { t } = useTranslation();
  return (
    <div className={css.banner}>
      <h1 className={css.h1}>{t("banner.title")}</h1>
      <h3 className={css.h3}>{t("banner.subtitle")}</h3>
      <BannerButton href={href}>{t("banner.buttonTitle")}</BannerButton>
    </div>
  );
}

export default Banner;
