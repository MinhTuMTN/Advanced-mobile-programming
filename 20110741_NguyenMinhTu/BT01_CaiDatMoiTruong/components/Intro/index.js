import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Intro = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }, 10000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Họ tên: Nguyễn Minh Tú</Text>
      <Text>MSSV: 20110741</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
