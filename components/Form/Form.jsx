import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultIMC from "../ResultIMC/ResultIMC";
import { useState } from "react";

import styles from "./style";

function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
  const [imc, setIMC] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  const imcCalculator = () => {
    return setIMC((weight / (height*height)).toFixed(2))
  }

  const validationIMC = () => {
    if (weight != null && height != null) {
      imcCalculator()
      setMessageIMC(`Seu IMC é:`)
      setTextButton("Calcular novamente")
      setHeight(null)
      setWeight(null)
      return
    }

    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha o peso e altura")
  }

  return ( 
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric" />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric" />

        <TouchableOpacity style={styles.buttonCalculator} onPress={validationIMC}> 
          <Text style={styles.textButtonCalculator}>{textButton}</Text> 
        </TouchableOpacity>
      </View>

      <ResultIMC resultIMC={imc} messageResultIMC={messageIMC} />
    </View>
   );
}

export default Form;