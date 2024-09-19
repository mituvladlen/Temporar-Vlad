import { StyleSheet, Text, View, Image } from 'react-native';
import {Spal, SplashScreen, Stack} from 'expo-router';
import {useFonts} from 'expo-font';
import {useEffect} from 'react';


SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'montserrat': require("../assets/fonts/Montserrat-Bold.ttf"),
    'montserrat-semibold': require("../assets/fonts/Montserrat-SemiBold.ttf"),
    'source-serifpro': require("../assets/fonts/SourceSerifPro-Regular.ttf"),
  });

  useEffect(() =>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: true}} />
    </Stack>
  )
}


export default RootLayout
// export default TabLayout;
