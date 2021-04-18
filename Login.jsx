import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default class Login extends Component {
  render() {
    return (
        <SafeAreaView>
      <ScrollView
        styles={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View styles={styles.loginTextContainer}>
          <Text style={styles.loginText}>LOG IN</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Username"
          />
          

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="Password"
          />

          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}> Log In </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Don't have an Account?</Text>
          <Text style={styles.signupText}> Sign up</Text>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  loginText: {
    fontSize: 50,
    color: "#5100ad",
  },
  loginTextContainer: {
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0853a8",
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    color: "#5100ad",
  },
});