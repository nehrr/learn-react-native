import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  Button,
  Dimensions,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonEnabled: false,
      label: "Disabled",
      isGifDisplayed: false
    };
  }

  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        {this.state.isGifDisplayed ? this.ViewGif() : this.ViewBase()}
      </View>
    );
  }

  ViewBase() {
    return (
      <View style={styles.container}>
        <Text style={[styles.nested, styles.text]}>{this.state.label}</Text>
        <Switch
          style={styles.nested}
          value={this.state.isButtonEnabled}
          onValueChange={this.changeValue}
        />
        <View style={styles.whiteButton}>
          <Button
            title="Let's Rock"
            style={styles.nested}
            disabled={!this.state.isButtonEnabled}
            onPress={this.buttonPressed}
          />
        </View>
      </View>
    );
  }

  ViewGif() {
    //for use with multiple views to take whole screen
    const { width, height } = Dimensions.get("window");

    return (
      <TouchableOpacity
        onPress={() => this.setState({ isGifDisplayed: false })}
      >
        <View style={(width, height)}>
          <Image style={styles.gif} source={require("./reaper.gif")} />
        </View>
      </TouchableOpacity>
    );
  }
  changeValue = value => {
    let label = this.state.label === "Enabled" ? "Disabled" : "Enabled";
    this.setState({ isButtonEnabled: value, label });
    console.log(value);
  };

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
