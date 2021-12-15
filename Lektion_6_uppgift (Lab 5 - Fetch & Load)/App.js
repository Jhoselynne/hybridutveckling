import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import Header from './src/Header';

export default function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  const loadingHandler = () => {
    setIsLoading(false);
    console.log('jell-O');
  }

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
    .then((response) => response.json())
    .then((json) => { setMovie(json)
      // console.log(json.movies);
    })
    .catch((e) => console.log(e));
    setTimeout(loadingHandler
    , 3000);
  }, [])
    
  return (
    <View style={styles.container}>
      
      {isLoading ? <ActivityIndicator size="large" /> : 
      <FlatList
        data={movie.movies}
        ListHeaderComponent={<Header/>}
        keyExtractor={({ id }, index) => id}
        renderItem={({item}) => (
        <View>
          <Text>{item.id + ' ' + item.title + ' ' + item.releaseYear}</Text>
          <Text>---------------------------------------</Text>
        </View>
        )}
      />}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
