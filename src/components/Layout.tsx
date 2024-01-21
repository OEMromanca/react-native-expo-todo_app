import "react-native-gesture-handler";

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FILTER_NAMES } from "../utils/filterMaps";
import { TFilterKey } from "../types/types";
import Todos from "./Todos";

const Drawer = createDrawerNavigator();

class Layout extends React.Component {
  initialRouteName = FILTER_NAMES[0];

  generateFilterScreens() {
    return FILTER_NAMES.map((name: TFilterKey) => (
      <Drawer.Screen
        key={name}
        name={name}
        children={() => <Todos filter={name} />}
        options={{ headerTitle: "" }}
      />
    ));
  }

  componentDidMount(): void {
    this.generateFilterScreens();
  }

  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={this.initialRouteName}>
          {this.generateFilterScreens()}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Layout;
