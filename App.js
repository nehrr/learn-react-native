import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>Something</Text>
        <Image style={styles.avatar} source={require("./fenris.png")} />
        <View style={styles.texts}>
          <Text style={styles.nested}>
            *
            <Text style={styles.textLeft}>left</Text>
            *
          </Text>
          <Text style={styles.nested}>
            *
            <Text style={styles.testRight}>right</Text>
            *
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  avatar: {
    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#000000",
    width: 150,
    height: 150,
    marginTop: 20
  },

  textLeft: {
    color: "#4286f4",
    textAlign: "left"
  },

  testRight: {
    color: "#f44141",
    textAlign: "right"
  },

  texts: {
    flexDirection: "row"
  },

  nested: {
    padding: 20
  }
});
