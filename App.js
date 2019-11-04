import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartScreen from './components/screens/StartScreen'
import GameScreen from './components/screens/GameScreen'

export default function App() {
  const [useNumber, setUseNumber] = useState();
  const startGameHandler = (selectedNumber) => {
    setUseNumber(selectedNumber);
  }

  let content = <StartScreen onStartGame={startGameHandler}/>;
  if(useNumber){
    content = <GameScreen userChoice={useNumber}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Test"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
