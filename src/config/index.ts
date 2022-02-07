import { default as general } from "./general"
import { default as localization } from "./localization"
import { default as server } from "./server"
import { default as whitelabel } from "./whitelabel"

export default {
  ...general,
  ...localization,
  ...server,
  ...whitelabel,
}
