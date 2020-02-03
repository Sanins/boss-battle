import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import BattleScreen from './screens/BattleScreen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false
      }
    }
  },
  Profile: {
    screen: BattleScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false
      }
    }
  },
});

const App = createAppContainer(MainNavigator);

export default App;