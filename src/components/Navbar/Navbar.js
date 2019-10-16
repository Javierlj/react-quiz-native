import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>QUIZ game</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: { backgroundColor: "grey" },
  text: { fontSize: 24, color: "white" }
});
