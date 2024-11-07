import { View, Text, TextInput, Button } from "react-native";

function Form() {
  return ( 
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.75" keyboardType="numeric" />

        <Text>Peso</Text>
        <TextInput placeholder="Ex. 75.365" keyboardType="numeric" />

        <Button title="Calcular IMC" />
      </View>
    </View>
   );
}

export default Form;