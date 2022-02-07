const { getDefaultConfig } = require("metro-config")

// when we update expo react native >= 0.64 then we need to change this approach: https://stackoverflow.com/a/41963217/9359051
const blacklist = require("metro-config/src/defaults/blacklist")

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      blacklistRE: blacklist([/apps\/.*/]), // exclude package.json from apps/* directories
    },
  }
})()
