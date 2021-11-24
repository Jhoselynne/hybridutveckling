import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, YellowBox } from 'react-native';

export default function App() {
  var textInputValue = "<answer goes here>"; // String variable
  const handlePress = () => console.log(textInputValue); // const arrow function
  const handleChangeText = () => console.log(textInputValue);

  return (
    <View style={styles.container}>
      <View style={{ height: "25%", backgroundColor: 'lightblue'}}>
        <Text style={{fontWeight: "bold", fontSize: 30}}>Hello World!</Text>
        <Text style={{fontSize:20}}>First React Native App</Text>
        <Text>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons</Text>
      </View>
      
      <Text style={{width: "80%", marginTop: "7%", fontWeight: "bold",fontSize:20}}>
        What would you like to get out of this course?
      </Text>

      <View style= {{ width: "80%", height: "15%", backgroundColor: 'lightgray'}}>
        <TextInput placeholder="Initial Text" onChangeText={handleChangeText}/>
      </View>

      <Text style={{width: "80%", marginTop: "5%", fontWeight: "bold", fontSize: 18}}>
        An emoji describing how you are feeling about the course:
      </Text>
      
      <Image style={{width:100, height:100}} 
        source={require('./assets/icon.png')}
      />
      
      <Button title="Submit" onPress={handlePress}
        // color="#ffff"
      />

      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 370,
    flex: 1,
    backgroundColor: 'white',
  },
});
