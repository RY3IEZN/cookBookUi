/** @format */

import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";

function RecipesScreen({ navigation, route }) {
  const [selectedItem, setSelectedItem] = useState();

  let { item } = route.params;

  useEffect(() => {
    let { item } = route.params;
    setSelectedItem(item);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={item.ingredients}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image source={item.icon} style={{ width: 100, height: 100 }} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default RecipesScreen;
