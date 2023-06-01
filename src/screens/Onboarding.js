import { View, Text, Image } from "react-native";
import React from "react";
import slides from "../components/slides";
import AppIntroSlider from "react-native-app-intro-slider";

const OnBoardingScreen = ({ navigation }) => {
  const buttonLabel = (label) => {
    return (
      <View
        style={{
          backgroundColor: "#F49F1C",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                padding: 15,
                paddingTop: 100,
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 300,
                  height: 500,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#221E1E",
                  fontSize: 24,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  paddingTop: 5,
                  color: "#221E1E",
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: "#722620",
          width: 10,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          navigation.navigate("AllowLocation");
        }}
      />
    </View>
  );
};

export default OnBoardingScreen;
