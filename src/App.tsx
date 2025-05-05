import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { RootNavigator } from '@/navigation';
import { store } from '@/store';
import {appStyles} from '@/theme';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={appStyles.container}>
          <RootNavigator />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}
