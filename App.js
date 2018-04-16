import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { StackNavigator } from "react-navigation";
import _ from "lodash";
import pokemons from "./pokemon.json";

const { width, height } = Dimensions.get("window");

class DetailView extends React.Component {}

class Pokedex extends React.Component {
  static navigationOptions = {
    title: "Pokedex"
  };

  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        {this.state.isGifDisplayed ? this.ViewGif() : this.ViewBase()}
      </View>
    );
  }

  showList() {
    const list = pokemons.map(pokemon => {
      return (
        <TouchableOpacity style={styles.cell}>
          <View key={pokemon.id} style={styles.item}>
            <Text style={styles.text}>{_.capitalize(pokemon.name)}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView>{list}</ScrollView>
      </View>
    );
  }

  showDetails(id) {
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.json
  }
}

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;

    return <Root />;
  }
}

const Root = StackNavigator({
  Pokedex: {
    screen: Pokedex
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    fontSize: 20,
    padding: 10,
    textAlign: "center"
  },

  cell: {
    borderWidth: 1,
    borderColor: "#E5443B",
    width: width,
    padding: 20
  },

  nested: {
    padding: 20
  }
});
