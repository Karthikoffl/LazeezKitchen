import React, { useState, createContext, useRef, useEffect } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { loginRequest } from "./authentication.service";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const auth = useRef(getAuth()).current;

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  //Google login
  WebBrowser.maybeCompleteAuthSession();
  const [request, response, Glogin] = Google.useAuthRequest({
    androidClientId:
      "586012277192-a1nqhnurk2rvkbl927unjj9rlcqi0532.apps.googleusercontent.com",
    expoClientId:
      "586012277192-f68aokhq14c500icmakro6hj9m0dpjp6.apps.googleusercontent.com",
  });
  useEffect(() => {
    if (response?.type == "success") {
      setAccessToken(response.authentication.accessToken);
      console.log(response.authentication.accessToken);
      getUserData();
    }
  }, [response]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
      console.log(user);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };

  //Facebook login
  const [req, res, fblogin] = Facebook.useAuthRequest({
    clientId: "1848014555585292",
  });

  useEffect(() => {
    if (res && res.type === "success" && res.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${res.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
      })();
    }
  }, [res]);

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        Glogin,
        fblogin,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
