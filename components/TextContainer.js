import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const TextContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.dullLavender,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: colors.charcoal,
    padding: 10,
    fontSize: 22
  }
});

export default TextContainer;
