import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Linking,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Surface, Avatar, Divider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
import {
  Feather,
  SimpleLineIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import styled from "styled-components/native";

const UserNameView = styled.View`
  alignitems: center;
  justifycontent: center;
  margin-top: 20px;
`;

const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const ProfileOptionButtonContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
  height: 50px;
  align-items: left;
`;

const ProfileOptionButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
`;

const LogOutButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #f49f1c;
  border-radius: 5px;
`;

const LogOutTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  const onRefresh = () => {
    //Clear old data of the list
    setDataSource([]);
    //Call the Service to get the latest data
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    //Service to get the data from the server to render
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setRefreshing(false);
        setDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{ left: -112 }}
          >
            <Ionicons name="arrow-back" size={35} color="white" />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>My Profile</Text>
        </View>
      </Surface>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ alignItems: "center", marginTop: 25 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && <Avatar.Icon size={130} icon="human" />}
            {photo && <Avatar.Image size={130} source={{ uri: photo }} />}
            <View
              style={{
                position: "absolute",
                backgroundColor: "#F49F1C",
                padding: 5,
                borderRadius: 50,
                top: 95,
                left: 95,
              }}
            >
              <Feather name="camera" size={18} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <UserNameView>
          <UserName>{user.email}</UserName>
        </UserNameView>
        <ProfileOptionButtonContainer>
          <ProfileOptionButton onPress={() => navigation.navigate("Order")}>
            <SimpleLineIcons
              style={{ paddingRight: 20 }}
              name="handbag"
              size={24}
              color="#F49F1C"
            />
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingTop: 4,
                fontWeight: 600,
                color: "#4B4B4B",
              }}
            >
              My Order
            </Text>
          </ProfileOptionButton>
        </ProfileOptionButtonContainer>
        <Divider />
        <ProfileOptionButtonContainer>
          <ProfileOptionButton onPress={() => navigation.navigate("Wishlist")}>
            <Ionicons
              style={{ paddingRight: 20 }}
              name="heart-outline"
              size={24}
              color="#F49F1C"
            />
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingTop: 4,
                fontWeight: 600,
                color: "#4B4B4B",
              }}
            >
              Wishlist
            </Text>
          </ProfileOptionButton>
        </ProfileOptionButtonContainer>
        <Divider />
        <ProfileOptionButtonContainer>
          <ProfileOptionButton onPress={() => navigation.navigate("Coupons")}>
            <MaterialIcons
              style={{ paddingRight: 20 }}
              name="local-offer"
              size={24}
              color="#F49F1C"
            />
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingTop: 4,
                fontWeight: 600,
                color: "#4B4B4B",
              }}
            >
              Coupons
            </Text>
          </ProfileOptionButton>
        </ProfileOptionButtonContainer>
        <Divider />
        <ProfileOptionButtonContainer>
          <ProfileOptionButton onPress={() => navigation.navigate("Address")}>
            <Feather
              style={{ paddingRight: 20 }}
              name="map-pin"
              size={24}
              color="#F49F1C"
            />
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingTop: 4,
                fontWeight: 600,
                color: "#4B4B4B",
              }}
            >
              Address
            </Text>
          </ProfileOptionButton>
        </ProfileOptionButtonContainer>
        <Divider />
        <ProfileOptionButtonContainer>
          <ProfileOptionButton onPress={() => navigation.navigate("Payment")}>
            <MaterialIcons
              style={{ paddingRight: 20 }}
              name="account-balance-wallet"
              size={24}
              color="#F49F1C"
            />
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingTop: 4,
                fontWeight: 600,
                color: "#4B4B4B",
              }}
            >
              Payment Method
            </Text>
          </ProfileOptionButton>
        </ProfileOptionButtonContainer>
        <Divider />
        <ProfileOptionButtonContainer>
          <ProfileOptionButton
            onPress={() => navigation.navigate("TermsCondition")}
          >
            <Ionicons
              style={{ paddingRight: 20 }}
              name="ios-document-text-outline"
              size={24}
              color="#F49F1C"
            />
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingTop: 4,
                fontWeight: 600,
                color: "#4B4B4B",
              }}
            >
              Terms & Condition
            </Text>
          </ProfileOptionButton>
        </ProfileOptionButtonContainer>
        <Divider />
        <ProfileOptionButtonContainer>
          <ProfileOptionButton
            onPress={() => Linking.openURL(`tel:$+917904156641`)}
          >
            <MaterialIcons
              style={{ paddingRight: 20 }}
              name="phone-in-talk"
              size={24}
              color="#F49F1C"
            />
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: 16,
                paddingTop: 4,
                fontWeight: 600,
                color: "#4B4B4B",
              }}
            >
              Help Center
            </Text>
          </ProfileOptionButton>
        </ProfileOptionButtonContainer>
        <Divider />
        <View
          style={{
            paddingBottom: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LogOutButton onPress={onLogout}>
            <LogOutTitle>Log Out</LogOutTitle>
          </LogOutButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    height: 58,
    elevation: 4,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "#F49F1C",
  },
  HeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 40,
  },
});
