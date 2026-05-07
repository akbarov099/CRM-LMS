import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import LanguageIconRu from "../assets/images/languageru.webp";
import LanguageIconKg from "../assets/images/languagekg.jpeg";
import LanguageIconUz from "../assets/images/languageuz.webp";
import Translate from "./Translate";
import { ProfileSelect } from "../modules/Profile/ProfileSelect";

export const Header = ({title}) => {
  const languageOptions = [
    { code: "ru", icon: LanguageIconRu, name: "Ру", value: "ru" },
    { code: "kg", icon: LanguageIconKg, name: "Кы", value: "kg" },
    { code: "uz", icon: LanguageIconUz, name: "Уз", value: "uz" },
  ];

  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isProfileSelectDropdownOpen, setProfileSelectDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen)
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
    localStorage.setItem("selectedLanguage", language.value)
  };

  const toggleProfileSelectDropdown = () => {
    setProfileSelectDropdownOpen(!isProfileSelectDropdownOpen);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      const language = languageOptions.find(
        (lang) => lang.value === savedLanguage
      );
      if (language) {
        setSelectedLanguage(language);
      }
    }
  }, []);

  return (
    <header className="container">
      <div className="header__wrapper">
        <h2>{title}</h2>
        <div className="header__wrapper-drops">
          <div className="header_language" onClick={toggleLanguageDropdown}>
            <div className="header_language_name">
              <img
                className="language_icon"
                src={selectedLanguage.icon}
                alt="Language"
              />
              <p className="language_name">{selectedLanguage.name}</p>
            </div>
            <IoIosArrowDown
              className={`header_language_arrow ${
                isLanguageDropdownOpen ? "open" : ""
              }`}
            />
            {isLanguageDropdownOpen && (
              <div className="language_dropdown">
                {languageOptions
                  .filter((language) => language.code !== selectedLanguage.code)
                  .map((language) => (
                    <div
                      key={language.code}
                      className="language_option"
                      onClick={() => handleLanguageChange(language)}
                    >
                      <img
                        className="language_icon"
                        src={language.icon}
                        alt={language.name}
                      />
                      <p className="language_name">{language.name}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <ProfileSelect
            isProfileSelectDropdownOpen={isProfileSelectDropdownOpen}
            toggleProfileSelectDropdown={toggleProfileSelectDropdown}
          />
        </div>
      </div>

      <Translate selectedLanguage={selectedLanguage} />
    </header>
  );
};
