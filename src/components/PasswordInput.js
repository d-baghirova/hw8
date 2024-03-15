import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.heading}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable
        onPress={() => setShowPassword(!showPassword)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
        })}
      >
        <Text style={styles.green}>{showPassword ? 'Hide' : 'Show'}</Text>
      </Pressable>
      {/* You can add an eye icon/button to toggle password visibility */}
      {/* For better user experience */}
      {/* Example: */}
      {/* <Icon name={hidePass ? 'eye-off' : 'eye'} onPress={() => setHidePass(!hidePass)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "lightgrey",
        height: 40,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 20,
    },
    heading: {
        fontSize: 20,
        color: "gray"
    },
    green: {
        color: "#5DB075"
    }
  })

export default PasswordInput;