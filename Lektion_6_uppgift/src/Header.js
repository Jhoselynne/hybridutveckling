import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return (
      <View style={styles.container}>
  
        <Text style={{ fontSize: 22, color: 'purple', textAlign: 'center'}}>Movies</Text>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 30,
    },
  });
  
  export default Header;