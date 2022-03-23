import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: colors.dullLavender,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: "#000",
    fontSize: 20
  }
});

export default NumberContainer;
