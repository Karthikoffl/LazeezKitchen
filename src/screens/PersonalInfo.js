import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const MainView = styled.View`
  flex: 1;
  background-color: #fff;
`;

const LoginTitle = styled.Text`
  text-align: left;
  font-size: 20px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  margin-top: 15px;
  text-align: left;
  font-size: 14px;
  color: #4b4b4b;
`;

const LoginButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: #f49f1c;
  padding-top: 16px;
  align-items: center;
  margin-top: 25px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const PersonalInfo = ({ navigation }) => {
  return (
    <MainView>
      <View style={{ padding: 20, marginTop: 40 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={{ paddingBottom: 40 }}
            name="arrow-back"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <LoginTitle>Help Us Get To Know</LoginTitle>
        <SubTitle>
          We need your location to show available restaurants & products.
        </SubTitle>

        <TextInput
          style={{ marginTop: 25 }}
          mode="outlined"
          activeOutlineColor="#F49F1C"
          placeholder="Enter Your Name"
          placeholderTextColor={"#CCCCCC"}
          label="Name"
        />
        <TextInput
          style={{ marginTop: 25 }}
          keyboardType="email-address"
          mode="outlined"
          activeOutlineColor="#F49F1C"
          placeholder="Enter Your E-Mail"
          placeholderTextColor={"#CCCCCC"}
          label="E-Mail"
        />
        <LoginButton
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <ButtonText>Confirm Detail</ButtonText>
        </LoginButton>
      </View>
    </MainView>
  );
};

export default PersonalInfo;
