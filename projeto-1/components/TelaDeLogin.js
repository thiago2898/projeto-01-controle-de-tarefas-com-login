import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

import styles from '../styles';

export default function TelaDeLogin({ navigation }) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [defaultName, setDefaultName] = useState('User');
  const [password, setPassword] = useState('user123');

  const [success, setSuccess] = useState(null);

  function logUser() {
    if (userName === defaultName && userPassword === password) {
      setSuccess(true);
      navigation.navigate('ListaDeTarefas', { userName })
    } else {
      setSuccess(false);
    }
  }
  return (
    <View style={styles.container}>

      <Image source={require('../assets/user-icon.png')} style={styles.image}/>

      <View style={styles.loginLabel}>
        <Text style={styles.textLabel}>Nome</Text>

        <TextInput style={styles.input} onChangeText={setUserName} />
      </View>
      <View style={styles.loginLabel}>
        <Text style={styles.textLabel}>Senha</Text>

        <TextInput style={styles.input} onChangeText={setUserPassword} />
      </View>
      {success ? (
        <View>
          <Text style={{ color: 'green' }}>User logged</Text>
        </View>
      ) : success !== false ? (
        <View></View>
      ) : (
        <View>
          <Text style={{ color: 'red' }}>User not logged</Text>
        </View>
      )}

      <Button title="Login" onPress={logUser} />
    </View>
  );
}
