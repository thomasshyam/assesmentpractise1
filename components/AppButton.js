import React from 'react';
import {  Text, StyleSheet, TouchableOpacity,Keyboard  } from 'react-native';

import colors from '../config/colors';

function AppButton({title,onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}  >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width:120,
        height:40,
        alignSelf:"center",
        borderRadius:10,
        alignItems  : "center",
        justifyContent: "center",
        backgroundColor:colors.charcoal,
        top:50,
    },
    text:{
        color: colors.mintCream,
        fontSize: 20,
    }
})
export default AppButton;