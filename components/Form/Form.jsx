import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "../ResultIMC/ResultIMC";
import { useState } from "react";

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
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric" />

        <Text>Peso</Text>
        <TextInput onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric" />

        <Button onPress={validationIMC} title={textButton} />
      </View>

      <ResultIMC resultIMC={imc} messageResultIMC={messageIMC} />
    </View>
   );
}

export default Form;