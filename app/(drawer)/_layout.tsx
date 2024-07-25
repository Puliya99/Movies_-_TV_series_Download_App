import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
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
          name="animationSeires"
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
        <Drawer.Screen
          name="logout"
          options={{
            headerStyle: { backgroundColor: '#309483' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerLabel: 'Logout',
            title: 'Logout',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
