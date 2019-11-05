import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const GameOver=  props => {
return (
    <View style={styles.screen}>
        <Text>Game Over</Text>
        <Text>Number of rounds: {props.rounds}</Text>
        <Button title='Restart' onPress={props.onRestart}/>
    </View>
)
}

const styles = StyleSheet.create({
    screen:{
        alignItems:"center",
        flex:1
    }
});
export default GameOver;