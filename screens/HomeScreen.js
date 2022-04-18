/** @format */

import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

import dummyData from "../data/dummyData";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  const RecipieCardInfo = ({ item }) => {
    return (
      <BlurView
        tint="dark"
        intensity={100}
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          height: 100,
          borderRadius: 20,
          width: "75%",
          marginHorizontal: 20,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
            margin: 3,
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                margin: 5,
                marginBottom: 25,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#757575",
                fontWeight: "700",
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              {item.duration} | Serving
            </Text>
          </View>
          <MaterialCommunityIcons
            name={item.isBookmark == false ? "bookmark" : "bookmark-outline"}
            size={30}
            color="green"
          />
        </View>
      </BlurView>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        {/* header bar */}
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            alignItems: "center",
            height: 80,
            marginTop: 30,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: "#BBD6C5",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Hello, Luis
            </Text>
            <Text
              style={{
                color: "#757575",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              what do you want to cook today?
            </Text>
          </View>
          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={require("../assets/dummy_profiles/profile.png")}
          />
        </View>
        {/* SearchBar */}
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            alignItems: "center",
            height: 50,
            backgroundColor: "#F5F6FB",
            borderRadius: 20,
            marginVertical: 5,
            padding: 10,
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons name="magnify" size={24} color="black" />
          <TextInput placeholder="Search Recipes" />
        </View>
        {/* search recipie */}
        <TouchableOpacity
          onPress={() => console.log(item)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#BBD6C5",
            margin: 5,
            marginHorizontal: 20,
            padding: 10,
            borderRadius: 20,
          }}
        >
          <Image
            source={require("../assets/recipe.png")}
            style={{ width: 80, height: 80 }}
          />
          <View style={{ margin: 5 }}>
            <Text style={{ width: "90%", marginBottom: 20 }}>
              You hace 12 recipes that you havent tried yet
            </Text>
            <Text>See Recipes</Text>
          </View>
        </TouchableOpacity>
        {/* Trending items */}
        <Text
          style={{
            color: "#BBD6C5",
            fontWeight: "bold",
            fontSize: 25,
            marginHorizontal: 20,
          }}
        >
          Trending Recipes
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Recipes", { item: item });
                    console.log(item);
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      marginVertical: 10,
                      width: 200,
                      height: 350,
                      marginHorizontal: 20,
                      borderRadius: 20,
                    }}
                  />
                  <View
                    style={{
                      marginHorizontal: 20,
                      position: "absolute",
                      top: 20,
                      left: 15,
                      backgroundColor: "rgba(77, 77, 77, 0.8)",
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 15,
                        margin: 5,
                      }}
                    >
                      {item.category}
                    </Text>
                  </View>
                  <RecipieCardInfo item={item} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        {/* categories of items */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "#1a8871",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Categories
          </Text>
          <Text
            style={{
              color: "#1a8871",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            View All
          </Text>
        </View>

        <FlatList
          data={dummyData.categories}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => console.log(item)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#F5F6FB",
                    margin: 5,
                    marginHorizontal: 20,
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                  />
                  <View style={{ marginHorizontal: 10 }}>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 16,
                        marginBottom: 50,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: "#757575",
                        fontWeight: "bold",
                        fontSize: 12,
                      }}
                    >
                      {item.duration} | Serving
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
