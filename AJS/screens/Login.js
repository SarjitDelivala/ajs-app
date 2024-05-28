import {React,useState} from 'react';
import { Text, StyleSheet, View, Pressable,TextInput ,Button} from 'react-native';

export default function Login(){
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    return(<View style={styles.container}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Login"  />
      </View>);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      width: '100%',
    },
  });