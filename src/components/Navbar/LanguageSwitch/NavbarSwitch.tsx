import css from "./NavbarSwitch.module.css";
import classnames from "classnames";
import { useTranslation } from "react-i18next";
import { ChangeEvent, useState } from "react";

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [checked, setChecked] = useState(i18n.language === "pl");

  const changeLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    const lng = event.target.checked ? "pl" : "en";
    i18n.changeLanguage(lng);
    setChecked(event.target.checked);
  };

  const inputClass = classnames({
    [css.input]: true,
    [css.checkToggle]: true,
    [css.checkToggleRoundFlat]: true
  });

  const spanClass = (on: boolean) => classnames({
    [css.span]: true,
    [css.on]: on,
    [css.off]: !on
  });

  return (
    <>
      <div className={css.center}>
        <div className={css.switch} id={"toggleBtn"}>
          <input id={"languageToggle"} className={inputClass} type="checkbox" checked={checked}
                 onChange={(event) => changeLanguage(event)}></input>
          <label htmlFor={"languageToggle"} className={css.label}> </label>
          <span className={spanClass(true)}>EN</span>
          <span className={spanClass(false)}>PL</span>
        </div>
      </div>

    </>
  );
}


export default LanguageSwitch;


