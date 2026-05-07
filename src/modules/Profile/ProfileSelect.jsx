import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/images/user_foto.png";

export const ProfileSelect = ({
  isProfileSelectDropdownOpen,
  toggleProfileSelectDropdown,
  handleLogout,
}) => {
  const { t } = useTranslation();

  return (
    <div className="header_profil" onClick={toggleProfileSelectDropdown}>
      <div className="header_profil_avatar_name">
        <img
          className="header_profil_avatar"
          src={defaultAvatar}
          alt="Default Avatar"
        />
        <div className="header_profil_name">
          <h2 className="profil_name">Devbros</h2>
          <p className="profil_jobtitle">Super Admin</p>
        </div>

      </div>
      <IoIosArrowDown
        className={`header_profil_arrow ${isProfileSelectDropdownOpen ? "open" : ""}`}
      />
      {isProfileSelectDropdownOpen && (
        <ul className="profile_dropdown">
          <Link to="/profile">
            <li className="profile_option">{t("profile")}</li>
          </Link>

          <Link>
            <li className="profile_option">
              {t("logout")}
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};
