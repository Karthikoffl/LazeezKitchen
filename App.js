import { StatusBar } from "react-native";
// import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { AuthenticationContextProvider } from "./src/authentication/authentication.context";
import { initializeApp } from "firebase/app";
import store from "./src/redux/store";
import { Provider } from "react-redux";

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

  return (
    <>
      <Provider store={store}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
        <ExpoStatusBar style="auto" />
      </Provider>
    </>
  );
}
