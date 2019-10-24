import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Game from "../Game/Game";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Game: {
      screen: Game
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
