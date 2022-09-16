import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ResultIMC(props) {
  return (
    <View>
      <Text>{props.messageResultImc}</Text>
      <Text>{props.ResultImc}</Text>
    </View>
  );
}
