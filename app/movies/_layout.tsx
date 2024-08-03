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
            }}/>
        <Stack.Screen name="hindi" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="tamil" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="korean" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="kannada" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="telagu" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="malayalam" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="japanese" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="otherLang" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="horror" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="action" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="romantic" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="thriller" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="comic" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="comedy" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
        <Stack.Screen name="crime" options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            }}/>
    </Stack>
  );
}