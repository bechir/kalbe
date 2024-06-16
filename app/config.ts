import ar from "./i18n/ar.json";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";

export type Locale = ApplicationConfig["i18n"]["locales"][number];

const URL = "http://localhost:8000";

export type ApplicationConfig = {
  app: {
    name: string;
    url: string;
    scheme: string;
    api_entrypoint: string;

    download_url: {
      android: string;
      ios: string;
      web: string;
    };
    apple_app_id: string;
    google_package_name: string;
  };

  i18n: {
    defaultLocale: Locale;
    locales: string[];
    resources: {
      [key in Locale]: { translation: { [key: string]: string } };
    };
  };
};

const config: ApplicationConfig = {
  app: {
    name: "Kalbe",
    scheme: "kalbe",
    url: URL,
    api_entrypoint: `${URL}/api`,

    download_url: {
      android: "https://play.google.com/store/apps/details?id=kalbe.io",
      ios: "https://apps.apple.com/app/",
      web: `${URL}/download`,
    },

    apple_app_id: "6504161708",
    google_package_name: "kalbe.io",
  },

  i18n: {
    locales: ["fr", "en", "ar"],
    defaultLocale: "fr",
    resources: {
      fr: { translation: fr },
      ar: { translation: ar },
      en: { translation: en },
    },
  },
};

export default config;
