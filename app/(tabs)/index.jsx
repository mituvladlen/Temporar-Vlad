import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter, Tabs, Redirect } from 'expo-router';



export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>

      {/* Avatar Container */}
      <TouchableOpacity style={styles.avatarContainer} onPress={() => router.push('/profile')}>
        <Image
          source={require('../../assets/icons/generic-avatar.png')} // Update with your avatar image path
          style={styles.avatar}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  link1: {
    color: 'blue',
    fontSize: 16,
    margin: 10,
  },
  link2:{
    color: 'green',
    fontSize: 16,
    margin: 10,
  },
  avatarContainer: {
    position: 'absolute',
    top: 55,
    right: 20,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'black',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

