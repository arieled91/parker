import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from "./RootNavigation";

const Navigation = ({ colorScheme }: Props) => (
  <NavigationContainer
    linking={LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator/>
  </NavigationContainer>
);

type Props = { colorScheme: ColorSchemeName }

export default Navigation

