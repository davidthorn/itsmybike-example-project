import React, { useState } from "react"
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Switch,
  Image,
  Platform,
  Dimensions,
} from "react-native"
import i18n from "i18n-js"
import { Text, AdaptiveScrollView } from "@src/components"
import { PhoneInput } from "./components"

const { width, height } = Dimensions.get("window")

const HOMESCREEN = require("@whitelabel/assets/images/home_screen.png")
const LOGO_LIGHT = require("@whitelabel/assets/images/logo_light.png")

const primary = "#fdc200"
const dark = "#575757"
const light = "#ffffff"
const grey = "#a9a9a9"
const transparentGrey = `${grey}77`
const transparentLight = `${light}77`

const spacer = 5
const ratioOfWidth = width / (Platform.OS === "ios" ? 414 : 384)
const ratioOfHeight = height / (Platform.OS === "ios" ? 896 : 769)
const smallTextSize = ratioOfWidth * 14
const normalTextSize = ratioOfWidth * 17
const borderWidth = 1
const cardWidthPercentage = "85%"
const spacerX2 = spacer * 2
const spacerX4 = spacer * 4
const spacerX6 = spacer * 6

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  logoImage: { width: "100%", height: 70, resizeMode: "contain" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switch: {
    marginRight: spacer,
  },
  privacyPolicyText: {
    flex: 1,
    fontSize: smallTextSize,
  },
  buttonContainer: {
    margin: spacerX6,
    width: cardWidthPercentage,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  adaptiveScrollView: { paddingHorizontal: spacerX2, paddingVertical: spacerX6 },
  card: {
    width: cardWidthPercentage,
    backgroundColor: `${primary}f0`,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: spacerX2,
  },
  cardContent: {
    marginTop: spacerX4,
  },
  cardContentText: {
    fontSize: normalTextSize,
    color: dark,
  },
  underline: { textDecorationLine: "underline" },
  spacerX2: {
    height: spacer * 2,
  },
  backgroundImageContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "font-bold",
  },
  button: {
    borderRadius: ratioOfHeight * 50,
    height: ratioOfHeight * 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
  },
  buttonPrimary: {
    backgroundColor: primary,
  },
  buttonTransparent: {
    backgroundColor: transparentGrey,
    borderWidth: borderWidth,
    borderColor: light,
  },
  buttonText: {
    fontSize: ratioOfWidth * 16,
    color: light,
  },
})

export const LoginScreen: React.FC = () => {
  const [privacyToggle, setPrivacyToggle] = useState<boolean>(false)

  const togglePrivay = () => setPrivacyToggle(!privacyToggle)

  const onRequestCodePress = () => {}

  return (
    <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === "ios"}>
      <ImageBackground source={HOMESCREEN} style={styles.backgroundImageContainer}>
        <View style={styles.flex}>
          <View style={styles.card}>
            <AdaptiveScrollView scrollToEnd style={styles.adaptiveScrollView}>
              <Image source={LOGO_LIGHT} style={styles.logoImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardContentText}>{i18n.t("welcome_text")}</Text>
                <View style={styles.spacerX2} />
                <Text style={[styles.cardContentText, styles.bold]}>{i18n.t("lets_go")}</Text>
                <View style={styles.spacerX2} />
                <PhoneInput />
                <View style={styles.spacerX2} />
                <View style={styles.row}>
                  <Switch
                    onValueChange={togglePrivay}
                    value={privacyToggle}
                    thumbColor={privacyToggle ? dark : light}
                    trackColor={{
                      false: transparentLight,
                      true: light,
                    }}
                    style={styles.switch}
                    accessible
                    accessibilityLabel="privaySwitch"
                    accessibilityRole="switch"
                    testID="privaySwitch"
                  />
                  <Text style={styles.privacyPolicyText}>
                    {i18n.t("accept_privacy_start")}
                    <Text style={styles.underline}> {i18n.t("accept_privacy_center")} </Text>
                    {i18n.t("accept_privacy_end")}
                  </Text>
                </View>
              </View>
            </AdaptiveScrollView>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, privacyToggle ? styles.buttonPrimary : styles.buttonTransparent]}
            onPress={onRequestCodePress}
            disabled={!privacyToggle}>
            <Text style={styles.buttonText}>{i18n.t("request_sms_code").toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}
