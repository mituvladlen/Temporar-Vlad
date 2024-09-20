import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 

//It's for code input!

const LogIn = () => { 
  const [code, setCode] = useState(['', '', '', '', '', '']); 
  const inputRefs = useRef([]); // Array of input references
  const router = useRouter();

  // Function to handle code input changes
  const handleCodeChange = (text, index) => {
    let newCode = [...code];
    newCode[index] = text;

    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setCode(newCode);
  };

  // Function to handle backspace and move focus to the previous input
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle code submission (e.g., send to backend)
  const handleSubmitCode = () => {
    const enteredCode = code.join('');
    console.log('Code entered:', enteredCode); //temporary
    //!!!!!router.push('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Enter the sent code</Text>
        <View style={styles.card}>
          <Text style={styles.subtitle} numberOfLines={3}>Check your email. In the email, you can find a code that you should enter here.</Text>
          <View style={styles.codeInputContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)} // Attach ref for each input
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)} // Handle backspace
                maxLength={1}
                keyboardType="numeric"
                style={styles.codeInput}
                textAlign="center"
                autoFocus={index === 0} // Focus the first input by default
              />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmitCode}>
          <Text style={styles.buttonText}>Submit Code</Text>
        </TouchableOpacity>
      </View>
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


export default LogIn