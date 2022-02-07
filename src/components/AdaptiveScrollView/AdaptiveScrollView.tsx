import React, { useState, useEffect, useRef } from "react"
import { StyleSheet, ScrollView, Keyboard, ViewStyle, Dimensions } from "react-native"
const { height } = Dimensions.get("window")

type AdaptiveScrollViewProps = {
  scrollToEnd?: boolean
  style?: ViewStyle
}

export const AdaptiveScrollView: React.FC<AdaptiveScrollViewProps> = ({
  scrollToEnd,
  style,
  children,
}) => {
  const [contentHeight, setContentHeight] = useState(0)
  const [isKeyboardActive, setKeyboardActive] = useState(false)
  const scrollView = useRef<ScrollView>()

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", keyboardDidShow)
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", keyboardDidHide)

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  const keyboardDidShow = () => {
    setKeyboardActive(true)
  }

  const keyboardDidHide = () => {
    setKeyboardActive(false)
  }

  const onContentSizeChange = (_, height) => {
    setContentHeight(height + 100)
  }

  const onLayout = () => {
    if (scrollView && scrollView.current) {
      scrollView.current.scrollToEnd({ animated: true })
    }
  }

  return (
    <ScrollView
      ref={scrollView}
      contentContainerStyle={[
        styles.container,
        style || {},
        isKeyboardActive && { height: contentHeight },
      ]}
      scrollEnabled={isKeyboardActive || contentHeight > height}
      onContentSizeChange={!isKeyboardActive && onContentSizeChange}
      onLayout={scrollToEnd && onLayout}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})
