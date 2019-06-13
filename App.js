/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TextInput, Text, TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';

export default class App extends Component {

  state = {
    s_length: 0,
    s_width: 0,
    p_length: 0,
    p_width: 0,
    result: "",
  }

  handleSubmit = () => {
    const { s_length, s_width, p_length, p_width } = this.state;
    try {
      axios.post(
        'https://iris-predict-api-heroku.herokuapp.com/predict',
        { s_length, s_width, p_length, p_width })
        .then(response => {
          console.log(response)
          this.setState({ result: response.data })
        })

    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={{ uri: 'https://images7.alphacoders.com/425/thumb-1920-425292.jpg' }}>
        <Text style={styles.resultText}>{this.state.result}</Text>
        <Text style={styles.title}>IRIS PLANT CLASSIFIER</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Tamanho da sépala"
            keyboardType="decimal-pad"
            underlineColorAndroid='transparent'
            onChangeText={(s_length) => this.setState({ s_length })} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Largura da sépala"
            keyboardType="decimal-pad"
            underlineColorAndroid='transparent'
            onChangeText={(s_width) => this.setState({ s_width })} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Tamanho da pétala"
            keyboardType="decimal-pad"
            underlineColorAndroid='transparent'
            onChangeText={(p_length) => this.setState({ p_length })} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Largura da pétala"
            keyboardType="decimal-pad"
            underlineColorAndroid='transparent'
            onChangeText={(p_width) => this.setState({ p_width })} />
        </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.handleSubmit}>
          <Text style={styles.loginText}>Submeter</Text>
        </TouchableOpacity>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
})

