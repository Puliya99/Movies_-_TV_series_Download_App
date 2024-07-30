import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="english" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            title: 'english',
            }}/>
    </Stack>
  );
}