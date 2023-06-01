import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  MainView,
  LoginTitle,
  LoginButton,
  ButtonText,
  LinkText,
  ResendButtonView,
  OtpContainer,
} from "../global/styles";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const OtpVerify = ({
  route: {
    params: { phoneNumber },
  },
}) => {
  const navigation = useNavigation();

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });

  return (
    <MainView>
      <ImageBackground
        source={require("../assets/images/otp-bg.png")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      ></ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <LoginTitle>Verify With OTP Send To {phoneNumber}</LoginTitle>
          <OtpContainer>
            <View>
              <TextInput
                style={{ width: 40, alignItems: "center" }}
                maxLength={1}
                keyboardType="number-pad"
                mode="outlined"
                activeOutlineColor="#F49F1C"
                ref={firstInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 1: text });
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View>
              <TextInput
                style={{ width: 40, alignItems: "center" }}
                maxLength={1}
                keyboardType="number-pad"
                mode="outlined"
                activeOutlineColor="#F49F1C"
                ref={secondInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 2: text });
                  text
                    ? thirdInput.current.focus()
                    : firstInput.current.focus();
                }}
              />
            </View>
            <View>
              <TextInput
                style={{ width: 40, alignItems: "center" }}
                maxLength={1}
                keyboardType="number-pad"
                mode="outlined"
                activeOutlineColor="#F49F1C"
                ref={thirdInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 3: text });
                  text
                    ? fourthInput.current.focus()
                    : secondInput.current.focus();
                }}
              />
            </View>
            <View>
              <TextInput
                style={{ width: 40, alignItems: "center" }}
                maxLength={1}
                keyboardType="number-pad"
                mode="outlined"
                activeOutlineColor="#F49F1C"
                ref={fourthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  text
                    ? fifthInput.current.focus()
                    : thirdInput.current.focus();
                }}
              />
            </View>
            <View>
              <TextInput
                style={{ width: 40, alignItems: "center" }}
                maxLength={1}
                keyboardType="number-pad"
                mode="outlined"
                activeOutlineColor="#F49F1C"
                ref={fifthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 5: text });
                  text
                    ? sixthInput.current.focus()
                    : fourthInput.current.focus();
                }}
              />
            </View>
            <View>
              <TextInput
                style={{ width: 40, alignItems: "center" }}
                maxLength={1}
                keyboardType="number-pad"
                mode="outlined"
                activeOutlineColor="#F49F1C"
                ref={sixthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 6: text });
                  !text && fifthInput.current.focus();
                }}
              />
            </View>
          </OtpContainer>
          <LoginButton
            onPress={() => {
              console.log(otp);
              navigation.navigate("PersonalInfo");
            }}
          >
            <ButtonText>Continue</ButtonText>
          </LoginButton>
          <ResendButtonView>
            <Text>Didn't Receive It?</Text>
            <TouchableOpacity onPress={() => Linking.openURL("#")}>
              <LinkText> Resend Again</LinkText>
            </TouchableOpacity>
          </ResendButtonView>
        </View>
      </View>
    </MainView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: "#fff",
    bottom: 50,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});
