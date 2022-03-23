import React from 'react';
import  Constants  from 'expo-constants';

import { StyleSheet,SafeAreaView,View,Platform,StatusBar  } from 'react-native';

function Screen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            <View>
            {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        // flex:1,
    }
})

export default Screen;