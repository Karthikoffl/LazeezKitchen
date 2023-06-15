import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useContext, useState } from "react";
import {
  MainView,
  LoginTitle,
  LoginButton,
  ButtonText,
  LinkText,
  FooterView,
} from "../global/styles";
import { TextInput } from "react-native-paper";
import { AuthenticationContext } from "../authentication/authentication.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const [visible, setVisible] = useState(true);

  return (
    <MainView>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      ></ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <LoginTitle>Register Now Using Email Address</LoginTitle>
          <TextInput
            style={{ marginTop: 20 }}
            keyboardType="email-address"
            mode="outlined"
            activeOutlineColor="#F49F1C"
            placeholder="Email Address"
            label="Email"
            value={email}
            onChangeText={(u) => setEmail(u)}
            autoCapitalize="none"
          />
          <TextInput
            style={{ marginTop: 20 }}
            mode="outlined"
            activeOutlineColor="#F49F1C"
            placeholder="Password"
            label="Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(p) => setPassword(p)}
            value={password}
            right={
              <TextInput.Icon
                icon={visible ? "eye-off" : "eye"}
                onPress={() => setVisible(!visible)}
              />
            }
          />
          <TextInput
            style={{ marginTop: 20 }}
            mode="outlined"
            activeOutlineColor="#F49F1C"
            placeholder="Repeat Password"
            label="Repeat Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(p) => setRepeatedPassword(p)}
            value={repeatedPassword}
            right={
              <TextInput.Icon
                icon={visible ? "eye-off-outline" : "eye-outline"}
                onPress={() => setVisible(!visible)}
              />
            }
          />
          {!isLoading ? (
            <LoginButton
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              <ButtonText>Register</ButtonText>
            </LoginButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.orange500} />
          )}
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontWeight: 600, fontSize: 16, color: "#F49F1C" }}>
              Back To Login
            </Text>
          </TouchableOpacity>
        </View>
        {/* <OrContainer>
          <OrLine />
            <Text style={{fontSize: 18, textAlign: 'center' }}>Or</Text>
          <OrLine />
        </OrContainer> */}
      </View>
      {/* <SocialLoginView>
        <TouchableOpacity onPress={() => {}}>
          <FontAwesome name="envelope" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image  source={require('../assets/images/gmail.png')} />
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../assets/images/fb.png')} />
        </TouchableOpacity>  
      </SocialLoginView> */}
      <FooterView>
        <Text style={{ textAlign: "center", justifyContent: "center" }}>
          By Clicking, I Accept The
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <LinkText> Terms Of Service</LinkText>
          </TouchableOpacity>{" "}
          And
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <LinkText>Privacy Policy</LinkText>
          </TouchableOpacity>
        </Text>
      </FooterView>
    </MainView>
  );
};

export default Register;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: "#fff",
    bottom: 100,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});
