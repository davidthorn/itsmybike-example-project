import config from "./whitelabel/config.json"

export default {
  name: config.meta.name,
  slug: config.meta.slug,
  scheme: "itsmybike",
  owner: "iotventure",
  privacy: "unlisted",
  platforms: ["ios", "android"],
  version: "1.8.2",
  orientation: "portrait",
  icon: "./whitelabel/assets/images/app_icon.png",
  splash: {
    image: "./whitelabel/assets/images/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ffffff",
  },
  updates: {
    enabled: false,
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  packagerOpts: {
    config: "metro.config.js",
    sourceExts: ["js", "jsx", "svg", "ts", "tsx"],
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: config.meta.package,
    infoPlist: {
      NSCalendarsUsageDescription:
        "This permission is not needed by the app, but it is required by an underlying API. If you see this dialog, contact us.",
      NSCameraUsageDescription:
        "We need access to your camera so that you can scan the QR code on your key card to add your bike to your account.",
      NSPhotoLibraryUsageDescription:
        "We need to access your camera roll so that you can upload images of your bike.",
      NSPhotoLibraryAddUsageDescription:
        "We need to access your camera roll so that you can upload images of your bike.",
      NSLocationUsageDescription:
        "Your current location is shown on the map to help you navigate to your bike.",
      NSLocationWhenInUseUsageDescription:
        "Your current location is shown on the map to help you navigate to your bike.",
      NSLocationAlwaysAndWhenInUseUsageDescription:
        "Your current location is shown on the map to help you navigate to your bike.",
      NSLocationAlwaysUsageDescription:
        "Your current location is shown on the map to help you navigate to your bike.",
    },
    config: {},
    buildNumber: "16",
  },
  android: {
    package: config.meta.package,
    versionCode: 398,
    useNextNotificationsApi: true,
    allowBackup: false,
    softwareKeyboardLayoutMode: "pan",
    config: {
      googleMaps: {},
    },
    permissions: [
      "ACCESS_COARSE_LOCATION",
      "ACCESS_FINE_LOCATION",
      "CAMERA",
      "READ_EXTERNAL_STORAGE",
      "WRITE_EXTERNAL_STORAGE",
      "ACCESS_NOTIFICATION_POLICY",
    ],
  },
  locales: {
    de: "./src/constants/permissions_de.json",
  },
}
