import { PropsWithChildren } from "react";
import css from "./Tile.module.css";
import { useTranslation } from "react-i18next";

interface Props {
  isNew?: boolean;
}

function Tile({ isNew = false, children }: PropsWithChildren<Props>) {
  const { t } = useTranslation();

  return (
    <div className={css.tile}>
      {isNew ? <div className={css.dot}></div> : undefined}
      {children}
      {isNew ? <div className={css.new}>{t("offer.new")}</div> : undefined}
    </div>
  );
}

export default Tile;
