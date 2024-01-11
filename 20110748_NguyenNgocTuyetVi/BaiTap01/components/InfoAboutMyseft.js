import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

const InfoAboutMyseft = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }, 10000);
    return () => clearTimeout(id);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Thông tin cá nhân
      </Text>
      <View style={styles.row}>
        <Text style={styles.textStyles}>Họ và tên:</Text>
        <Text style={styles.info}>Nguyễn Ngọc Tuyết Vi</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textStyles}>MSSV:</Text>
        <Text style={styles.info}>20110748</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textStyles}>Lớp:</Text>
        <Text style={styles.info}>20110ST01</Text>
      </View>
    </View>
  );
};

export default InfoAboutMyseft;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 90,
    paddingHorizontal: 20,
    gap: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  textStyles: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1.5,
  },
  info: {
    color: "black",
    fontSize: 16,
    flex: 3.5,
  },
});
