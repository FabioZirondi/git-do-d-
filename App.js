import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '', // Novo campo de entrada
    input3: '', // Novo campo de entrada
    input4: '', // Novo campo de entrada
    input5: '', // Novo campo de entrada
  });
  const [sum, setSum] = useState(0);

  const handleInputChange = (inputName, value) => {
    setInputValues({ ...inputValues, [inputName]: value });
  };

  const handleSum = () => {
    const { input1, input2, input3 ,input4 ,input5 } = inputValues;
    const result = parseInt(input1 || 0) + parseInt(input2 || 0) + parseInt(input3 || 0) + parseInt(input4 || 0) + parseInt(input5 || 0); // Lidando com entradas vazias
    setSum(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input 1: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input1', value)}
        value={inputValues.input1}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Input 2: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input2', value)}
        value={inputValues.input2}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Input 3: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input3', value)}
        value={inputValues.input3}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Input 4: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input4', value)}
        value={inputValues.input4}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Input 5: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input5', value)}
        value={inputValues.input5}
        keyboardType="numeric"
      />

      <Button title="Somar" onPress={handleSum} />
      <Text style={styles.result}>Resultado: {sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2CDA9D',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default App;
