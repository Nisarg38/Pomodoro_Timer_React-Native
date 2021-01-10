import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import PomodoroTimer from "./components/pomodoroTimer";


let list = [];
for (let i = 0; i < 60; i++) {
  list.push(i.toString());
} 

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <PomodoroTimer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E84C3D"
    // alignItems: "center",
    // justifyContent: "center"
  },
  textInputStyle:{
    fontSize: 30,
    marginTop: "-100%",
    marginLeft: '10%',
    flex:1,
    alignItems: "center",
    flexDirection: 'row',
  },
});
