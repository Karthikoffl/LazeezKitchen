import { View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import * as Location from "expo-location";

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

const AllowLocation = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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
        <LoginTitle>What's Your Location?</LoginTitle>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing. Nunc eleifend
          metus pulvinar mattis.
        </SubTitle>
        <Image
          style={{ marginTop: 20, width: 330, height: 370 }}
          source={require("../assets/images/location.png")}
        />
        <LoginButton
          onPress={() => {
            navigation.navigate("AllowNotify");
          }}
        >
          <ButtonText>Allow Location Access</ButtonText>
        </LoginButton>
        <LoginButton2 onPress={() => {}}>
          <ButtonText2>Enter Location Manually</ButtonText2>
        </LoginButton2>
      </View>
    </MainView>
  );
};

export default AllowLocation;
