import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Character from './../components/Character/Character';

export default function BattleScreen() {
  const totalHealth = 100;
  const [aiHealth, setAiHealth] = useState(totalHealth);
  const [userDamage] = useState(6);

  function buttonClickHandler() {
    setAiHealth(aiHealth - userDamage);
  }

  return (
    <View style={styles.container}>
      <Character
        maxHealth={totalHealth} 
        currentHealth={aiHealth}
        attackDamage={5}
        ai={true}
      />
      <Character
        maxHealth={totalHealth} 
        currentHealth={totalHealth}
        attackDamage={userDamage}
        onClick={buttonClickHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
