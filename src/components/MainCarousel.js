import { View, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import GlobalApi from "../global/GlobalApi";

const MainCarousel = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    const result = (await GlobalApi.getSliders()).data;
    console.log("Result", result);
    const resp = result.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      image: item.attributes.image.data.attributes.url,
    }));
    console.log("Slider List", resp);
    setSlider(resp);
  };

  return (
    <View style={{ flex: 4, justifyContent: "center" }}>
      <Swiper
        height={150}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={2}
        activeDotColor="#F49F1C"
      >
        {slider.map((item) => (
          <View style={styles.slide1}>
            <Image source={{ uri: item.attributes?.data?.attributes?.url }} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default MainCarousel;

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
