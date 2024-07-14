import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/baiscope.png")} style={styles.logo} />
      
      <Text style={styles.welcomeText}>Welcome back</Text>
      <Text style={styles.signInText}>Sign in to continue</Text>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
      </SafeAreaView>

      <Button
        onPress={() => alert('Login')}
        title="LOGIN"
        color="#841584"
      />

      <TouchableOpacity onPress={() => alert('Forgot password')}>
        <Text style={styles.forgotPasswordText}>Forget password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('Register')}>
        <Text style={styles.registerText}>Don't have an account yet? Register</Text>
      </TouchableOpacity>
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  signInText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  input: {
    height: 40,
    width:270,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: '#00008b',
    marginTop: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  termsText: {
    marginLeft: 5,
    color: '#00008b',
  },
  registerText: {
    textAlign: 'center',
    color: '#00008b',
    marginTop: 20,
  },
});
