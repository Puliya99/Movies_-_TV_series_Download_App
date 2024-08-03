import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="forget" options={{ headerShown: false }}/>
      <Stack.Screen name="register" options={{ headerShown: false }}/>
      <Stack.Screen name="(drawer)" options={{ headerShown: false}} />
      <Stack.Screen name="movies" options={{ headerShown: false}} />
      <Stack.Screen name="latest" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
    </Stack>
  );
}
