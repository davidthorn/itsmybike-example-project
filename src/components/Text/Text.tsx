import React from "react"
import { Text as RNText, StyleSheet, Platform, TextStyle, StyleProp } from "react-native"
import config from "@src/config"

const dark = "#575757"

const getFont = style => {
  if (style && style.fontWeight === "bold") {
    return "font-bold"
  }
  if (style && style.fontWeight === "100") {
    return "font-light"
  }
  return "font-regular"
}

type TextProps = {
  style?: StyleProp<TextStyle>
  onPress?: () => void
  numberOfLines?: number
  ellipsizeMode?: "head" | "middle" | "tail" | "clip"
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  style,
  onPress,
  numberOfLines,
  ellipsizeMode,
  children,
}) => {
  const textStyle = Array.isArray(style) ? style : [style]
  return (
    <RNText
      style={[
        {
          fontFamily: getFont(style),
        },
        styles.text,
        ...textStyle,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}>
      {children}
    </RNText>
  )
}
const styles = StyleSheet.create({
  text: {
    color: dark,
    paddingTop: Platform.OS === "ios" ? config.font.offsetTop : 0,
  },
})
