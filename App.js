import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { AuthenticationContextProvider } from "./src/authentication/authentication.context";
import { initializeApp } from "firebase/app";
import store from "./src/redux/store";
import { Provider } from "react-redux";

// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from "@expo-google-fonts/oswald";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2IANGd25OLeLXpQf96sIgKo7skCCFEc",
  authDomain: "lazeez-kitchen-876f3.firebaseapp.com",
  projectId: "lazeez-kitchen-876f3",
  storageBucket: "lazeez-kitchen-876f3.appspot.com",
  messagingSenderId: "586012277192",
  appId: "1:586012277192:web:ae9e7a19112baa0b2768fd",
};

initializeApp(firebaseConfig);

export default function App() {
  StatusBar.setBarStyle("dark-content", true);

  // const [oswaldLoaded] = useOswald({
  //   Oswald_400Regular,
  // });

  // const [latoLoaded] = useLato({
  //   Lato_400Regular,
  // });

  // if (!oswaldLoaded || !latoLoaded) {
  //   return null;
  // }

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </>
  );
}
