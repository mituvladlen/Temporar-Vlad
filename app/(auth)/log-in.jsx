// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// const LogIn = () => { 
//   const [code, setCode] = useState(['', '', '', '', '', '']); 
//   const inputRefs = useRef([]);
//   const router = useRouter();

//   const handleCodeChange = (text, index) => {
//     let newCode = [...code];
//     newCode[index] = text;
//     if (text.length === 1 && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//     setCode(newCode);
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handleSubmitCode = () => {
//     const enteredCode = code.join('');
//     console.log('Code entered:', enteredCode); //temporary
//     if (enteredCode === '123456') {
//       router.push('/(tabs)/index'); // Move to the main app
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Enter the sent code</Text>
//         <View style={styles.card}>
//           <Text style={styles.subtitle}>Check your email for the code.</Text>
//           <View style={styles.codeInputContainer}>
//             {code.map((digit, index) => (
//               <TextInput
//                 key={index}
//                 ref={(ref) => (inputRefs.current[index] = ref)}
//                 value={digit}
//                 onChangeText={(text) => handleCodeChange(text, index)}
//                 onKeyPress={(e) => handleKeyPress(e, index)}
//                 maxLength={1}
//                 keyboardType="numeric"
//                 style={styles.codeInput}
//                 textAlign="center"
//                 autoFocus={index === 0}
//               />
//             ))}
//           </View>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={handleSubmitCode}>
//           <Text style={styles.buttonText}>Submit Code</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };


// app/auth/login.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing auth tokens

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    // TODO: Implement real authentication logic with your backend
    // For demonstration, we'll assume login is always successful and store a dummy token
    const dummyToken = 'abc123'; // Replace with actual token from backend
    try {
      await AsyncStorage.setItem('userToken', dummyToken); // Save token to AsyncStorage
      router.push('/auth/code-entry'); // Navigate to Code Entry screen
    } catch (error) {
      console.error('Error saving auth token:', error);
      // Optionally, handle the error (e.g., show an alert to the user)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#93a6e4',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10, 
    marginTop: 20,
  },
  card: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 20, 
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, 
  },
  codeInput: {
    width: 40,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
    textAlign: 'center', 
  },
  button: {
    width: '80%',
    backgroundColor: '#7286D3',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
