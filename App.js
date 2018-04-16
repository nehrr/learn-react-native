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

class DetailView extends React.Component {
  static navigationOptions = {
    title: "Details"
  };

  render() {
    console.log(this.props.navigation.state.params);
    const pic =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      this.props.navigation.state.params.id +
      ".json";
    console.log(pic);
    // const { id } = this.props.navigation.state.params;
    // const { name } = this.props.navigation.state.params;
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.json

    return (
      <View>
        <Text style={styles.text}>
          {this.props.navigation.state.params.name}
        </Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: pic
          }}
        />
      </View>
    );
  }
}

class Pokedex extends React.Component {
  static navigationOptions = {
    title: "Pokedex"
  };

  render() {
    const { navigate } = this.props.navigation;
    const list = pokemons.map(pokemon => {
      return (
        <TouchableOpacity style={styles.cell}>
          <View key={pokemon.id} style={styles.item}>
            <Text
              style={styles.text}
              onPress={() =>
                navigate("DetailView", { id: pokemon.id, name: pokemon.name })
              }
            >
              {_.capitalize(pokemon.name)}
            </Text>
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
  },
  DetailView: {
    screen: DetailView
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
