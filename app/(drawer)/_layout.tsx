import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Alert } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { useRouter } from 'expo-router';

function CustomDrawerContent(props) {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Are you sure you want to logout?",
      "",
      [
        {
          text: "CANCEL",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "LOGOUT", 
          onPress: () => {
            console.log("Logout Pressed");
            router.push('/');
          } 
        }
      ]
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="home"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="movies"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'Movies',
            title: 'Movies',
          }}
        />
        <Drawer.Screen
          name="tvSeries"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'Tv Series',
            title: 'Tv Series',
          }}
        />
        <Drawer.Screen
          name="animation"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'Animation',
            title: 'Animation',
          }}
        />
        <Drawer.Screen
          name="animationSeries"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'Animation Series',
            title: 'Animation Series',
          }}
        />
        <Drawer.Screen
          name="wwe"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'WWE',
            title: 'WWE',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
