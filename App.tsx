import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import BattleScreen from './screens/BattleScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  Profile: {screen: BattleScreen},
});

const App = createAppContainer(MainNavigator);

export default App;