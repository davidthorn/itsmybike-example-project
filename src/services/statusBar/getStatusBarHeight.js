import { Platform } from 'react-native'
import Constants from 'expo-constants'
import isIPhoneX, { iPhoneStatusBarHeight } from './isIPhoneX'

export default (skipAndroid = true) =>
  Platform.select({
    ios: isIPhoneX() ? iPhoneStatusBarHeight() : 20,
    android: skipAndroid ? 0 : Constants.statusBarHeight,
    default: 0,
  })
