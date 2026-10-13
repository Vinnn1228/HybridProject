import { Redirect } from "expo-router";
import { Component } from "react";

export default class RootIndexScreen extends Component {
  render() {
    return <Redirect href="/(auth)/login" />;
  }
}
