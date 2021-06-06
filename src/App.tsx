import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {ApplicationProvider, IconRegistry} from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = (): JSX.Element | null => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? eva.dark : eva.light;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} /><ApplicationProvider {...eva} theme={theme}>
          <SafeAreaProvider>
            <StatusBar />
            <Navigation colorScheme={colorScheme} />
          </SafeAreaProvider>
        </ApplicationProvider>
      </>

    );
  }
};

export default App
