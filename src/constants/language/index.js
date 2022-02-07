import localDe from "./de.json"
import localDe_formal from "./de_formal.json"
import localNl from "./nl.json"
import localEn from "./en.json"

import configDe from "../../../whitelabel/language/de.json"
import configDe_formal from "../../../whitelabel/language/de_formal.json"
import configNl from "../../../whitelabel/language/nl.json"
import configEn from "../../../whitelabel/language/en.json"

export { default as getLanguageCode } from "./getLanguageCode"
export const de = { ...localDe, ...configDe }
export const de_formal = { ...localDe_formal, ...configDe_formal }
export const nl = { ...localNl, ...configNl }
export const en = { ...localEn, ...configEn }
