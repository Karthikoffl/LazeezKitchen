import React, { useState, useEffect } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { MainHomeView } from "../global/styles";
import Categories from "../components/Categories";
import MainCarousel from "../components/MainCarousel";
import HomeHeader from "../components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/HorizontalCard";
import VerticalCard from "../components/VerticalCard";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  const onRefresh = () => {
    //Clear old data of the list
    setDataSource([]);
    //Call the Service to get the latest data
    getData();
  };

  useEffect(() => {
    getData();
    getProducts();
  }, []);

  const getProducts = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:1337/api/products", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

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
    <MainHomeView>
      <HomeHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <MainCarousel />
        <Categories />
        <HorizontalCard />
        <VerticalCard />
      </ScrollView>
    </MainHomeView>
  );
};

export default HomeScreen;
