import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/baiscope.png")} style={styles.logo} />

      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
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
          onChangeText={setConfirmPassword}
          secureTextEntry
          value={confirmPassword}
        />
      </SafeAreaView>

      <View style={styles.loginButton}>
        <Button
          onPress={() => alert('Login')}
          title="LOGIN"
          color="#C82F2D"
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
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
    width: 100,
  },
});
