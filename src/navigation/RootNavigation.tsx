import {createStackNavigator} from "@react-navigation/stack";
import {RootStackParamList} from "./types";
import NotFoundScreen from "../screens/NotFoundScreen";
import * as React from "react";
import Home from "../screens/Home";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = (): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{title: 'Parker'}}/>
    <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
  </Stack.Navigator>
);

export default RootNavigator;
