import config from "@whitelabel/config.json"

export default {
  meta: config.meta,
  links: {
    ...config.links,
    insurance_packages: "https://itsmybike.cloud/VersicherungspaketeEBike.pdf",
  },
  font: config.font,
  settings: config.settings,
  privacy_policy: config.privacy_policy,
  feedEmail: config.feedEmail,
  feedEmailBCC: config.feedEmailBCC,
}
