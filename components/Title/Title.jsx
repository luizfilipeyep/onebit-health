import { Text, View } from 'react-native'
import Form from '../Form/Form';

import styles from './style';

function Title() {
  return ( 
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>ONEBITHEALTH</Text>
      <Form />
    </View>   
  );
}

export default Title;