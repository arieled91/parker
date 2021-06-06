import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../navigation/types';
import {Layout, Text} from "@ui-kitten/components";

const NotFoundScreen = ({navigation}: StackScreenProps<RootStackParamList, 'NotFound'>): JSX.Element => (
  <Layout style={styles.container}>
    <Text style={styles.title}>This screen does not exist.</Text>
    <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.link}>
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </Layout>
);

export default NotFoundScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
