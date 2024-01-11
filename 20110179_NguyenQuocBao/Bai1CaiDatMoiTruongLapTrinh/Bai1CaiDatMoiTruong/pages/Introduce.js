import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const Introduce = ({ navigation }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("HomePage");
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 24 }]}>
        Họ tên: Nguyễn Quốc Bảo
      </Text>
      <Text style={[styles.text, { fontSize: 20 }]}>MSSV: 20110179</Text>
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
    marginBottom: 10,
  },
});

export default Introduce;
