import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import Layout from "./src/components/Layout";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Layout />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    margin: 0,
    padding: 0,
  },
});

export default App;
