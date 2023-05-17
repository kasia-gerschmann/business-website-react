import { PropsWithChildren } from "react";
import MainHeader from "./Header/MainHeader";
import MainFooter from "./Footer/MainFooter";
import css from "./MainLayout.module.css";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainHeader />
      <main className={css.content}>{children}</main>
      <MainFooter />
    </>
  );
}

export default MainLayout;
