import React from "react"
import {Text, View, StyleSheet} from "react-native"
import styles from "./style"

export default function Title() {
  return(
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>ONEBITHEALTH</Text>
    </View>
  );
}