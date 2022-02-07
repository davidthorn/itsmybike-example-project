import { Platform, Dimensions } from 'react-native'
import * as Device from 'expo-device'

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const IPHONE12_H = 844
const IPHONE12_Max = 926
const IPHONE12_Mini = 812

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

export default () => {
  return (
    (Platform.OS === 'ios' &&
      ((W_HEIGHT === X_HEIGHT && W_WIDTH === X_WIDTH) || (W_HEIGHT === X_WIDTH && W_WIDTH === X_HEIGHT))) ||
    ((W_HEIGHT === XSMAX_HEIGHT && W_WIDTH === XSMAX_WIDTH) ||
      (W_HEIGHT === XSMAX_WIDTH && W_WIDTH === XSMAX_HEIGHT)) ||
    W_HEIGHT === IPHONE12_H ||
    W_HEIGHT === IPHONE12_Max ||
    W_HEIGHT === IPHONE12_Mini
  )
}

export const iPhoneStatusBarHeight = () => {
  if (W_HEIGHT === IPHONE12_H || W_HEIGHT === IPHONE12_Max || W_HEIGHT === IPHONE12_Mini) {
    // Match device name
    // Because iPhone 11 Pro and iPhone 12 Mini both has same height but different statusbar height
    if (Device.modelName === 'iPhone 11 Pro') {
      return 44
    }
    return 47
  }
  return 44
}
