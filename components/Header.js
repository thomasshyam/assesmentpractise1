import React from 'react';
import {  Text, StyleSheet,SafeAreaView,Platform,StatusBar } from 'react-native';
import  Constants  from 'expo-constants';

import colors from '../config/colors';

const Header = props => {
  return (
            <SafeAreaView style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: colors.orangeYellow,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop  : Constants.statusBarHeight,
    },
    headerTitle: {
        color: colors.mintCream,
        fontSize: 22
    }
});

export default Header;