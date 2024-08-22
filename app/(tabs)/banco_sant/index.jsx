import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  const [saldo, setSaldo] = useState(7680); 
  const [valor, setValor] = useState('');

  const Deposito = () => {
    if (!isNaN(parseFloat(valor))) {
      setSaldo(saldo + parseFloat(valor));
      setValor('');
    }
  };

  const Saque = () => {
    if (!isNaN(parseFloat(valor)) && saldo >= parseFloat(valor)) {
      setSaldo(saldo - parseFloat(valor));
      setValor('');
    }
  };

  return (
    <View style={styles.background}>
      <Image
        source={{ uri: 'https://gkpb.com.br/wp-content/uploads/2018/03/novo-logo-santander-fundo-vermelho.jpg' }}
        style={styles.logo}
        resizeMode="contain"
      />
      

      <Text style={styles.saldoText}>Saldo: R$ {saldo.toFixed(2)}</Text>

   
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={Deposito}>
          <Text style={styles.buttonText}>Depósito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saqueButton]} onPress={Saque}>
          <Text style={styles.buttonText}>Saque</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#eb0104', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  saldoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  saqueButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
