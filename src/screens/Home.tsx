import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout} from "@ui-kitten/components";
import Map from "../components/Map";

const Home = (): JSX.Element => {
  return (
    <Layout style={styles.container} level='1'>
      <View style={{height: '100%'}}>
        <Map/>
      </View>
    </Layout>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
