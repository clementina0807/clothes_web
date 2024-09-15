import { createI18n } from "vue-i18n";
import zh from "./lang/zh_TW.json";
import en from "./lang/en_US.json";
import { getLanguage } from "@/utils/localStorage";

export default createI18n({
  legacy: false,
  locale: getLanguage() || "zh_TW",
  fallbackLocale: "zh_TW",
  messages: {
    zh_TW: zh,
    en_US: en,
  },
});
