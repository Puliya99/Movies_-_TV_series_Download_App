import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, CheckBox, Image } from "react-native";
import { Link } from "expo-router";

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <Image source={require("@/assets/images/baiscope.png")} style={styles.logo} />
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />

      <Button
        title="REGISTER"
        onPress={() => alert('Register')}
        color="#C82F2D"
      />

      <Text style={styles.loginPrompt}>
        Already have an account yet? 
        <Link href={"/"}>
          <Text style={styles.loginText}> Login</Text>
        </Link>
      </Text>
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
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  logo: {
    width: 200,
    height: 124,
    alignSelf: 'center',
    marginBottom: 75,
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
  termsText: {
    color: '#00008b',
    marginLeft: 5,
  },
  loginPrompt: {
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  loginText: {
    color: '#00008b',
  },
});

