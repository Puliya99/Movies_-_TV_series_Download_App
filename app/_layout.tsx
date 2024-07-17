import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="forget" options={{ headerShown: false }}/>
      <Stack.Screen name="register" options={{ headerShown: false }}/>
      <Stack.Screen
          name="home"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Ionicons name="menu" size={24} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: 'Home',
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <Ionicons name="search" size={24} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="movies"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Ionicons name="menu" size={24} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: 'Movies',
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <Ionicons name="search" size={24} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="english"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Ionicons name="menu" size={24} color="white" />
              </TouchableOpacity>
            ),
            headerTitle: 'English',
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <Ionicons name="search" size={24} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
    </Stack>
  );
}