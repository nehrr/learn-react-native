import React from "react";
import { StyleSheet, Text, View, Image, Switch, Button } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonEnabled: true,
      label: "Disabled",
      isGifDisplayed: false
    };
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <Text style={[styles.nested, styles.text]}>{this.state.label}</Text>
        <Switch
          style={styles.nested}
          value={this.state.isButtonEnabled}
          onValueChange={isButtonEnabled => this.changeValue()}
        />
        <View style={styles.whiteButton}>
          <Button
            title="Let's Rock"
            style={styles.nested}
            disabled={this.state.isButtonEnabled}
            onPress={this.buttonPressed}
          />
        </View>
        {this.state.isGifDisplayed && (
          <View style={styles.imageContainer}>
            <Image style={styles.gif} source={require("./reaper.gif")} />
          </View>
        )}
      </View>
    );
  }

  changeValue() {
    if (this.state.isButtonEnabled == true) {
      this.setState({ label: "Enabled" });
      this.setState({ isButtonEnabled: false });
    } else {
      this.setState({ label: "Disabled" });
      this.setState({ isButtonEnabled: true });
    }
    console.log(this.state.isButtonEnabled);
  }

  //To keep the 'this'
  buttonPressed = () => {
    this.setState({ isGifDisplayed: true });
    console.log("button pushed");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEDEDE",
    alignItems: "center",
    justifyContent: "center"
  },

  whiteButton: {
    backgroundColor: "#fff",
    margin: 20
  },

  imageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  gif: {
    flex: 1,
    resizeMode: "stretch"
  },

  text: {
    fontSize: 20,
    padding: 20
  },

  nested: {
    padding: 20
  }
});
