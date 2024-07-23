import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [name, setName] = React.useState('')

  const salvar = () => {
    if (name.length == 0) {
      alert("Digite seu nome, o campo está vazio")
    } else {
      AsyncStorage.setItem('nome', name)
    }
  }

  return (
    <View
      style={styles.main}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Muito Bem-vindo!!!</Text>
        <TextInput
          placeholder="Digite o seu nome"
          style={styles.input}
          value={name}
          onChangeText={(value) => {
            setName(value)
          }}
        >
        </TextInput>
        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() => {
            salvar()
          }}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#bfe6ff',
    height: 300,
    width: 300,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black'
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 27,
    width: 220,
    marginTop: 10
  },
  text: {
    fontSize: 25
  },
  botaoEntrar: {
    backgroundColor: 'white',
    height: 27,
    width: 150,
    marginTop: 20,
    border: '2px solid black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})