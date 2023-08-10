import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const choices = ['Piedra', 'Papel', 'Tijera'];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (playerChoice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(playerChoice);
    setComputerChoice(computerRandomChoice);

    const winCombination = {
      Piedra: 'Tijera',
      Papel: 'Piedra',
      Tijera: 'Papel',
    };

    if (playerChoice === computerRandomChoice) {
      setResult('Empate');
    } else if (winCombination[playerChoice] === computerRandomChoice) {
      setResult('¡Ganaste!');
    } else {
      setResult('Perdiste :(');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piedra, Papel o Tijera</Text>
      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice}
            style={styles.choiceButton}
            onPress={() => playGame(choice)}
          >
            <Text style={styles.choiceButtonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.text}>Elige: {playerChoice}</Text>
      <Text style={styles.text}>Computadora: {computerChoice}</Text>
      <Text style={styles.resultText}>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  choiceButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  choiceButtonText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;