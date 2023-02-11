// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from './screens/Onboarding';
import { AuthContext } from './context/AuthContext';
import { useMemo } from 'react';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator()

export default function App() {

  const authContext = useMemo(
    () => ({})
  )
  return (

      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='onboarding' component={Onboarding} />
            <Stack.Screen name='profile' component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>

  );
}


