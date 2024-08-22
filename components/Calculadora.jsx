import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');
  const [showResult, setShowResult] = useState(false);

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res = 0;

    switch (operation) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Erro';
        break;
      default:
        res = 'Operação inválida';
    }

    setResult(res.toString());
    setShowResult(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setOperation('+')} />
        <Button title="-" onPress={() => setOperation('-')} />
        <Button title="*" onPress={() => setOperation('*')} />
        <Button title="/" onPress={() => setOperation('/')} />
      </View>
      <Button title="Calcular" onPress={calculate} />
      {showResult && <Text style={styles.result}>Resultado: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default Calculadora;