import { ReactNode } from "react";
import MainHeader from "./Header/MainHeader";
import MainFooter from "./Footer/MainFooter";
import css from "./MainLayout.module.css";

interface Props {
  children?: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <MainHeader></MainHeader>
      <div className={css.content}>{children}</div>
      <MainFooter></MainFooter>
    </>
  );
}

export default MainLayout;
