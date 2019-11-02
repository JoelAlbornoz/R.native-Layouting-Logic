import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import Card from '../Card'
import colors from '../../constants/colors'
import Input from '../Input'
import NumberContainer from '../NumberContainer'

const StartScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const numberInputHandler = (inputText) => {
        let tempValue = inputText.replace(/[^0-9]/g, '');
        setEnteredValue(tempValue);
    };
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false) 
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100){
            Alert.alert('Alerta','Valor ingresado no valido')
            return}
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(parseInt(enteredValue));
    }
    let confirmedOutput;
    if (confirmed){
        confirmedOutput = <Card style={styles.summaryContainer}><Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='START GAME'/>
        </Card>
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={{ width: 300, maxWidth: '80%', alignItems: 'center' }}>
                <Text>Select a number</Text>
                <Input value={enteredValue} onChangeText={numberInputHandler} style={styles.input} blurOnSubmit keyboardType="number-pad" maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View style={{ width: "45%" }}><Button color={colors.accent} title="Reset" onPress={resetInputHandler} /></View>
                    <View style={{ width: "45%" }}><Button color={colors.primary} title="Confirm" onPress={confirmInputHandler} /></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-evenly',
        paddingHorizontal: 5
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        width: 80,
        textAlign: 'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems: 'center'
    }
})

export default StartScreen;