import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.containerHome}>
        <Image style={{width:100, height:100}} source={require('./assets/house.png')}/>
        <Text style={{padding:10, color:"#528786", fontWeight: 'bold'}}>SmartHome</Text>
      </View>

      <Text style={styles.sizeText}>Rooms</Text>

      <View style={styles.containerRooms}>
        <View style={[styles.rooms, {marginLeft: 0}]}>
          <Image style={styles.roomsImage} source={require('./assets/living-room.png')} />
          <Text>Living Room</Text>
        </View>
        <View style={styles.rooms}>
          <Image style={styles.roomsImage} source={require('./assets/bed.png')}/>
          <Text>Bedroom</Text>
        </View>
        <View style={styles.rooms}>
          <Image style={styles.roomsImage} source={require('./assets/kitchen.png')}/>
          <Text>Kitchen</Text>
        </View>
      </View>

      <Text style={styles.sizeText}>Devices</Text>

      <View>
        <View style={styles.containerDevices}>
          <View style= {styles.lightGreenRed}></View>
          <Text>Living Room Lamp</Text>
          <View>
            <Button title= 'On'/>
            <Button title= 'Off'/>
          </View>
        </View>

        <View style={styles.containerDevices}>
          <View style= {styles.lightGreenRed}></View>
          <Text>Heater</Text>
          <View>
            <Button title= 'On'/>
            <Button title= 'Off'/>
          </View>
        </View>

        <View style={styles.containerDevices}>
          <View style= {styles.lightGreenRed}></View>
          <Text>TV</Text>
          <View>
            <Button title= 'On'/>
            <Button title= 'Off'/>
          </View>
        </View>

        <Text style={{fontWeight: 'bold'}}>Total Devices on: </Text>
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 40
  },

  containerHome: {
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 0,
    alignItems: 'center',
  },

  containerRooms: {
    flexDirection: 'row',
  },

  rooms: {
    margin: 5,
    padding: 10,
    backgroundColor:'#65B8B8',
    alignItems: 'center'
  },

  roomsImage: {
    height: 85,
    width: 85,
  },

  sizeText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  containerDevices: {
    backgroundColor:"#FEF6AF",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },

  lightGreenRed: {
    width: 15,
    height: 15,
    backgroundColor: '#3A7F24',
    margin: 5
  }
});
