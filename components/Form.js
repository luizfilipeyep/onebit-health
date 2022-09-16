import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import ResultImc from "./ResultIMC"
import styles from "./style"

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("CALCULAR IMC")

  function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
  }

  var classificationImc = null

  function classification() {
    if (imc < 18.5) {
      classificationImc = "MAGREZA"
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
      classificationImc = "NORMAL"
    }
    else if (imc >= 25 && imc <= 29.9) {
      classificationImc = "SOBREPESO"
    }
    else if (imc >= 30 && imc <= 39.9) {
      classificationImc = "OBESIDADE"
    }
    else {
      classificationImc = "OBESIDADE GRAVE"
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu IMC é igual:")
      setTextButton("Calcular novamente")

      return
    }
    setImc(null)
    setTextButton("CALCULAR IMC")
    setMessageImc("Preencha o peso e altura")
  }

  

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric"></TextInput>

        <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc(), classification()}>
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
        {/*<ResultImc style={styles.result} messageResultImc={messageImc} ResultImc={imc}/>*/}
        <Text style={styles.result}>{messageImc}</Text>
        <Text style={styles.resultText}>{imc}</Text>

        <Text>{classificationImc}</Text>
      </View>
    </View>
  );
}
