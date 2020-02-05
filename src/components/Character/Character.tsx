import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

interface CharacterProps {
    maxHealth: number;
    currentHealth: number;
    attackDamage: number;
    onClick?: any;
    ai?: boolean;
}

export default function Character(props: CharacterProps) {

    return (
        <View style={!props.ai ? styles.ai : styles.human}>
            <Text>{props.currentHealth < 0 ? 'died' : props.currentHealth} / {props.maxHealth}</Text>
            {!props.ai &&
                <Button
                    onPress={props.onClick}
                    title="FIGHT"
                    color="red"
                    accessibilityLabel="Click this button to increase count"
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    human: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    ai: {
        flex: 1,
        backgroundColor: '#FF5733',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
  });