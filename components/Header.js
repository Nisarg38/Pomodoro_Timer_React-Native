import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>POMODORO TIMER</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#C2362B",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 5,
    position: "relative"
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.5,
    marginTop: 33,
    fontFamily: Platform.OS == "android" ? "notoserif" : "system"
  }
});
export default Header;
