import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; // Importing icons
import { useRouter } from 'expo-router'; // Import the useRouter hook

const LostScreen = () => {
  const router = useRouter();
  
  // State to hold the text input
  const [description, setDescription] = useState(''); // Add useState for description

  const handleContinuePress = () => {
    router.push('../continue'); // Navigate to the "continue" page
  };

  return (
    <LinearGradient
      colors={['#C3D6F9', '#F1FBFF']}
      style={styles.container}
    >
      <View style={styles.container}>
        {/* Title Section */}
        <Text style={styles.title}>Lost Item Report</Text>

        {/* Text Input Section */}
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Describe the item you found..."
            value={description}
            onChangeText={setDescription}
            style={styles.textInput}
            multiline
          />
        </View>

        {/* Icons Section */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="camera" size={32} color="#007BFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="image" size={32} color="#007BFF" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleContinuePress} style={styles.continueContainer}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInputContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 40,
  },
  textInput: {
    fontSize: 16,
    color: '#333',
    height: 120,
    textAlignVertical: 'top', // Ensures the text starts at the top of the TextInput
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  continueContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 60,
  },
  continueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default LostScreen;