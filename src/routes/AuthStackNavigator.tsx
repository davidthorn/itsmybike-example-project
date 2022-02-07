import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { LoginScreen } from "@src/login"

export type AuthStackNavigatorParamList = {
  Welcome: {}
}

const Stack = createStackNavigator<AuthStackNavigatorParamList>()

export const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
