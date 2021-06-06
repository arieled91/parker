import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
