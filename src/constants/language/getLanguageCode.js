import * as Localization from "expo-localization"
import config from "@src/config"

export default () => {
  const systemLanguage = Localization.locale

  let languageCode = systemLanguage.substring(0, 2)

  if (!config.supportedLanguages.includes(languageCode)) {
    languageCode = config.defaultLang
  }

  if (languageCode === "de" && config.settings.use_formal_german) {
    return "de_formal"
  }
  return languageCode
}
