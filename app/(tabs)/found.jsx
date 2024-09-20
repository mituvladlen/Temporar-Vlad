import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LostScreen = () => {
  return (
    <View style={styles.container}>
      {/* Container (like a div) */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>This is some text inside a View container!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full screen
    alignItems: 'center', // Horizontally center
    justifyContent: 'center', // Vertically center
    backgroundColor: '#F0F0F0',
  },
  textContainer: {
    padding: 20, // Add some padding inside the container
    backgroundColor: '#FFFFFF', // Background color for the 'div' (View)
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow for elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow
  },
  text: {
    fontSize: 18, // Text size
    color: '#333333', // Text color
  },
});

export default LostScreen;
