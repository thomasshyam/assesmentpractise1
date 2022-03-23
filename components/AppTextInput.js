import React,{useState} from 'react';
import { StyleSheet, TextInput,View,Platform } from 'react-native';

import defaultStyles from '../config/styles';

function AppTextInput({...otherProps}) {

    return (
        <View style={styles.container}>
            <TextInput style={defaultStyles.text}{...otherProps} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderWidth:4,
        // width: 300,
        width:Platform.OS === 'android' ? '90%' : '90%',
        // height: 60,
        height:Platform.OS === 'android' ? 50 : 50,
        top:20,
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
    },
})

export default AppTextInput;