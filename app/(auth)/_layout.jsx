import { View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'; // To manage local storage

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Holds authentication status
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Retrieve the auth token (or any other method to determine if user is logged in)
        const token = await AsyncStorage.getItem('userToken');
        setIsAuthenticated(!!token); // Set to true if token exists
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (isAuthenticated !== null) {
      // Redirect based on auth status
      if (isAuthenticated) {
        router.replace('../(tabs)/index');
      } else {
        router.replace('../(auth)/log-in');
      }
    }
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    // Show loading spinner while checking authentication status
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <Stack>
        <Stack.Screen 
          name='sign-in'
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='log-in'
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar />
    </>
  );
};

export default AuthLayout;