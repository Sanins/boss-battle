import React from 'react';
import { View, Button } from 'react-native';

interface LoginScreenProps {
  navigation: any;
}

export default function LoginScreen(props: LoginScreenProps) {
  const {navigate} = props.navigation;

  return (
    <View>
        <Button
            title='Continue'
            onPress={() => navigate('Profile', {name: 'Jane'})}
        />
    </View>
  );
}
