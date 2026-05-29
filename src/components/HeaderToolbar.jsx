import { useTranslation } from "react-i18next";
import { IoSearchOutline } from "react-icons/io5";
import { MdFilterNone } from "react-icons/md";
import { Link } from "react-router-dom";

export const HeaderToolbar = ({ textBtn, link, btnicon: Icon }) => {
    const { t } = useTranslation();
  
  return (
    <div className="header__toolbar">

      <div className="left__toolbar">
        <div className="left__toolbar--input">
          <input type="text" placeholder={t("search")} />
          <IoSearchOutline className="left__toolbar--input-icon" />
        </div>
        <button className="left__toolbar--filter">
          <MdFilterNone className="left__toolbar--filter-icon" />
        </button>
      </div>

      <Link to={link}>
        <button className="right__toolbar--btn">
          <Icon className="right__toolbar--btn-icon" />
          {textBtn}
        </button>
      </Link>
    </div>
  );
};
