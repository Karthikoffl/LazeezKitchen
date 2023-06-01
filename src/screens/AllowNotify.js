import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

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
  margin-top: 25px;
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

const LoginButton2 = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  padding-top: 10px;
  align-items: center;
  margin-top: 15px;
  border-radius: 5px;
`;

const ButtonText2 = styled.Text`
  color: #f49f1c;
  font-size: 16px;
  font-weight: 600;
`;

const AllowNotify = () => {
  const navigation = useNavigation();

  return (
    <MainView>
      <View style={{ padding: 20, marginTop: 40 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={{ paddingBottom: 30 }}
            name="arrow-back"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <LoginTitle>Get Updates On Your Order Status</LoginTitle>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc eleifend
          metus pulvinar mattis.
        </SubTitle>
        <Image
          style={{ marginTop: 20, width: 330, height: 370 }}
          source={require("../assets/images/notification.png")}
        />
        <LoginButton
          onPress={() => {
            navigation.navigate("PersonalInfo");
          }}
        >
          <ButtonText>Allow Notification</ButtonText>
        </LoginButton>
        <LoginButton2 onPress={() => {}}>
          <ButtonText2>Not Now</ButtonText2>
        </LoginButton2>
      </View>
    </MainView>
  );
};

export default AllowNotify;
