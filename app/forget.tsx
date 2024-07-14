import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/baiscope.png")} style={styles.logo} />

      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
      </SafeAreaView>

      <View style={styles.loginButton}>
        <Button
          onPress={() => alert('Login')}
          title="LOGIN"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 124,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 270,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
    width: 100,
  },
});
