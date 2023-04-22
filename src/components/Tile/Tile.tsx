import { ReactNode } from "react";
import css from "./Tile.module.css";

interface Props {
  children?: ReactNode;
  isNew?: boolean;
}

function Tile({ isNew = false, children }: Props) {
  return (
    <div className={css.tile}>
      {isNew ? <div className={css.dot}></div> : undefined}
      {children}
      {isNew ? <div className={css.new}>(Nowość)</div> : undefined}
    </div>
  );
}

export default Tile;
