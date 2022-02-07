import React from "react"
import { StyleSheet, View, StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import i18n from "i18n-js"
import { getLanguageCode, de, de_formal, nl, en } from "./src/constants/language"
import { AuthStackNavigator } from "@src/routes"
import getStatusBarHeight from "./src/services/statusBar/getStatusBarHeight"
import { useFonts } from "expo-font"

i18n.translations = { en, de, de_formal, nl }
i18n.locale = getLanguageCode()

const primary = "#fdc200"

export const App: React.FC = () => {
  const [loaded] = useFonts({
    "font-light": require("./whitelabel/assets/fonts/font-light.ttf"),
    "font-regular": require("./whitelabel/assets/fonts/font-regular.ttf"),
    "font-bold": require("./whitelabel/assets/fonts/font-bold.ttf"),
  })

  if (!loaded) return null

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={primary} />
        <AuthStackNavigator />
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: getStatusBarHeight(),
    borderTopColor: primary,
  },
})
