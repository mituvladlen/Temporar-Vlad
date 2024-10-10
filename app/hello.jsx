import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomePage = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to React Native!</Text>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  counterText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default WelcomePage;
