/** @format */

import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* title */}
      <View>
        <ImageBackground
          source={require("../assets/login-background.png")}
          style={{
            justifyContent: "flex-end",
            height: 600,
          }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["rgba(0, 0, 0, 0)", "black"]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 40, fontWeight: "700" }}>
              Cooking a Delicious Food Easily
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 18,
                fontWeight: "700",
                width: "80%",
              }}
            >
              Discover more than 1200 food recipes in your hands and cooking it
              easily!
            </Text>
          </LinearGradient>
        </ImageBackground>
        {/* buttons */}
        <TouchableOpacity
          style={{
            marginVertical: 20,
            height: 65,
            width: "80%",
            backgroundColor: "#229879",
            marginHorizontal: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() =>
            navigation.navigate("NestedTabs", { screen: "HomeScreen" })
          }
        >
          <Text style={{ fontWeight: "700", color: "black", fontSize: 20 }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 5,
            height: 65,
            width: "80%",
            marginHorizontal: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#229879",
          }}
        >
          <Text style={{ fontWeight: "700", color: "#229879", fontSize: 20 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default LoginScreen;
