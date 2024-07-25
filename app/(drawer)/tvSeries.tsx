import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const languages = [
  { name: 'English', color: '#0000FF', route: 'english' },
  { name: 'Hindi', color: '#FFA500', route: '/hindi' },
  { name: 'Tamil', color: '#FF4500', route: '/tamil' },
  { name: 'Korean', color: '#FF69B4', route: '/korean' },
  { name: 'Kannada', color: '#FFB6C1', route: '/kannada' },
  { name: 'Telugu', color: '#DDA0DD', route: '/telugu' },
  { name: 'Malayalam', color: '#0B1F3B', route: '/malayalam' },
  { name: 'Japanese', color: '#32CD32', route: '/japanese' },
  { name: 'Other Lang', color: '#000000', route: '/other-lang' },
  { name: 'Horror', color: '#8B0000', route: '/horror' },
  { name: 'Action', color: '#FF6347', route: '/action' },
  { name: 'Romantic', color: '#FF1493', route: '/romantic' },
  { name: 'Thriller', color: '#4B0082', route: '/thriller' },
  { name: 'Comic', color: '#FFD700', route: '/comic' },
  { name: 'Comedy', color: '#00FFFF', route: '/comedy' },
  { name: 'Crime', color: '#696969', route: '/crime' },
];

const tvSeriesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {languages.map((lang, index) => (
          <Link 
            href={lang.route}
            key={index}
            style={[styles.box, { backgroundColor: lang.color }]}
          >
            <Text style={styles.text}>{lang.name}</Text>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  box: {
    width: '45%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});  

export default tvSeriesScreen;
