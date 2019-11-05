import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartScreen from './components/screens/StartScreen'
import GameScreen from './components/screens/GameScreen'
import GameOver from './components/screens/GameOver'
export default function App() {

  const [useNumber, setUseNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUseNumber(selectedNumber);
    setGuessRounds(0)
  }

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  const onRestartHandler = () => {
    setGuessRounds(0);
    setUseNumber(undefined);
  }
  //let content = <StartScreen onStartGame={startGameHandler}/>;
  let content;
  if(useNumber && guessRounds <= 0){
    content = <GameScreen userChoice={useNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOver rounds={guessRounds} onRestart={onRestartHandler}/>
  }else{
    content = <StartScreen onStartGame={startGameHandler}/>;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
