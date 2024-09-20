import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Import the useRouter hook
import genericAvatar from '../../assets/icons/generic-avatar.png'; // Import the icon from assets

const FoundScreen = () => {
  const router = useRouter(); // Initialize the router

  const handleContinuePress = () => {
    router.push('../continue'); // Navigate to the "continue" page
  };

  return (
    <LinearGradient colors={['#C3D6F9', '#F1FBFF']} style={styles.container}>
      <View style={styles.container}>
        {/* Title Section */}
        <Text style={styles.title}>Lost Item Report</Text>

        {/* Person Info Section */}
        <View style={styles.personContainer}>
          <Image source={genericAvatar} style={styles.avatar} />
          <View style={styles.personInfo}>
            <Text style={styles.name}>Joric Vartanov</Text>
            <Text style={styles.number}>+373 XX XXX XXX</Text>
          </View>
        </View>

        {/* Lost Object Info */}
        <View style={styles.objectContainer}>
          <Text style={styles.objectText}>
            Image of the object that Joric Vartanov has lost:
          </Text>
          <View style={styles.objectImagePlaceholder}>
            <Text>Object Image Placeholder</Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>Contact the person</Text>
        </View>

        {/* Continue Button */}
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
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  personInfo: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
    color: '#666',
  },
  objectContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  objectText: {
    fontSize: 16,
    marginBottom: 8,
  },
  objectImagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#F3F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  contactContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
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

export default FoundScreen;
