import React from 'react';
import { View, Button } from 'react-native';

export default function LoginScreen() {
    const {navigate} = this.props.navigation;

  return (
    <View>
        <Button
            title='Continue'
            onPress={() => navigate('Profile', {name: 'Jane'})}
        />
    </View>
  );
}
