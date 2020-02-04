import React from 'react';
import * as actions from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Text, View } from 'react-native';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(store => store.count);

  return (
    <View>
      <Text>The count is {count}</Text>
      <Button title='title' onPress={() => dispatch(actions.increment(count))}>+</Button>
      <Button title='title' onPress={() => dispatch(actions.decrement(count))}>-</Button>
    </View>
  );
}

export default App;