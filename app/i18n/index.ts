import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import config from "../config";
import { I18nManager } from "react-native";

const { defaultLocale, resources } = config.i18n

i18n
.use(initReactI18next)
.init({
  compatibilityJSON: 'v3',
  resources,
  lng: I18nManager.isRTL ? "ar" : defaultLocale,
  fallbackLng: defaultLocale,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
