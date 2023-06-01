import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../screens/Onboarding";
import Login from "../screens/Login";
import PersonalInfo from "../screens/PersonalInfo";
import AllowLocation from "../screens/AllowLocation";
import AllowNotify from "../screens/AllowNotify";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="OnboardingScreen"
        component={OnBoardingScreen}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="AllowLocation"
        component={AllowLocation}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="AllowNotify"
        component={AllowNotify}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="PersonalInfo"
        component={PersonalInfo}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ gestureEnabled: false, headerShown: false }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};
