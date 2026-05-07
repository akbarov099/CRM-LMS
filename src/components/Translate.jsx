import React from "react";

import translationsRu from "../i18n/translationsRu";
import translationsUz from "../i18n/translationsUz";
import translationsKg from "../i18n/translationsKg";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationsRu },
    uz: { translation: translationsUz },
    kg: { translation: translationsKg },
  },
  lng: "ru",
  fallbackLng: "ru",
});

export default function Translate({ selectedLanguage }) {
  React.useEffect(() => {
    i18n.changeLanguage(selectedLanguage.value);
  }, [selectedLanguage]);
}
