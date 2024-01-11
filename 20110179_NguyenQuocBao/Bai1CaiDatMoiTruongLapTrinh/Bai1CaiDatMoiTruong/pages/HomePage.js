import React, { useEffect } from "react";
import { StyleSheet, View, Text, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomePage = () => {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          () => {
            return true;
          }
        );
        return () => backHandler.remove();
      }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Chào mừng đến với trang chủ!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
        fontWeight: 700,
        fontSize: 20,
    }
  });

export default HomePage;
