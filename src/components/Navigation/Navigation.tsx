import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './../../screens/LoginScreen';
import BattleScreen from './../../screens/BattleScreen';
import Test from './../../screens/Test';

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
  Test: {
    screen: Test,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: false
      }
    }
  },
});

export default createAppContainer(MainNavigator);