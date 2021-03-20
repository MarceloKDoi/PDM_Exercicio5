import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


import keys from './keys';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [cidade, setCidade] = useState("");
  const [previsoes, setPrevisoes] = useState([]);
  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }
  const obterPrevisoes = () => {
    setPrevisoes([]);
    const target = `${endPoint}${cidade}&appid=${apiKey}`;

    fetch(target)
      .then((dados) => dados.json())
      .then((dados) => {
        setPrevisoes(dados["list"])
        setCidade('')
        Keyboard.dismiss()
      });
  }


  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=`;
  const apiKey = keys.weatherMapApiKey;
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem={
          previsao => (
            <PrevisaoItem previsao={previsao.item} />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white"
  },
  nomeCidade: {
    padding: 12,
    borderBottomColor: "#BB96F3",
    borderBottomWidth: 2,
    textAlign: "center",
    marginBottom: 8
  },
  entrada: {
    marginBottom: 12
  }
});