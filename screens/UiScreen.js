import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
    Image
} from 'react-native';

import Card from '../components/Card';
import AppTextInput from '../components/AppTextInput';
import NumberContainer from '../components/NumberContainer';
import Header from '../components/Header'; 
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText);
  };

  const confirmInputHandler = () => {
    setConfirmed(true);
    setSelectedNumber(enteredValue);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <NumberContainer>{selectedNumber}</NumberContainer>
      </Card>
    );
  }

  return (
    <Screen
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Header title="Monkey-Chunky"/>
            <Image 
                    style={styles.logo}
                    source={require('../assets/img.png')}
            />
            <AppTextInput onChangeText={numberInputHandler} value={enteredValue} />
                <View style={styles.button}>
                    <AppButton title="Go" onPress={confirmInputHandler}  />
                </View>
            {confirmedOutput}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
//   screen: {
//     alignItems: 'center',
//     width: '100%',
//   },
  summaryContainer: {
      top: 70,
    marginTop: 20,
    alignItems: 'center'
  },
  logo:{
    width:120,
    height:120,
    alignSelf:'center',
    marginTop:10,
    marginBottom:20,
  }
});

export default StartGameScreen;
