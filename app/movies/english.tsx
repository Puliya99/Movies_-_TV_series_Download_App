
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const movies = [
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2018/06/Deadpool-2-2018-new-768x430.jpg',
    title: 'DEADPOOL 2 (2018) | මැරෙන්න පුලුවන් වුල්වීට විතරයි ද? (18+)',
    url: 'https://baiscopedownloads.link/deadpool-2-2018-2-2-2/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2018/08/Deadpool-2016_800x360-570x257.jpg',
    title: 'DEADPOOL (2016) | ඔබේ අසල්වැසි පූල් හාදයා.',
    url: 'https://baiscopedownloads.link/deadpool-2016/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2020/12/I-Am-Number-Four-2011-768x346.jpg',
    title: 'I AM NUMBER FOUR (2011) | අංක තුනෙන් පසු…',
    url: 'https://baiscopedownloads.link/i-am-number-four-2011/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/07/Kindom-of-the-planet-of-the-apes-2024-cover-image-1536x691-1-570x256.jpg',
    title: 'KINGDOM OF THE PLANET OF THE APES (2024) | වානර රාජධානිය සහ නෝවා',
    url: 'https://baiscopedownloads.link/kingdom-of-the-planet-of-the-apes-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/07/Lo-Capitano-2023-Cover-02-570x257.jpg',
    title: 'IO CAPITANO (2023) | පරාදීසය බලා',
    url: 'https://baiscopedownloads.link/io-capitano-2023/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2018/05/Samson-2018-768x346.jpg',
    title: 'SAMSON (2018) | දෙවියන්ගේ ශක්තිය ලඳ තැනැත්තා',
    url: 'https://baiscopedownloads.link/samson-2018/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/07/Sniper-2-2003--570x257.jpg',
    title: 'SNIPER 2 [2002] | ස්නයිපර්',
    url: 'https://baiscopedownloads.link/sniper-2-2002/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2020/08/Expendables-3_800x360-570x257.jpg',
    title: 'THE EXPENDABLES 3 (2014) |සුපිරි වීරයෝ…..',
    url: 'https://baiscopedownloads.link/the-expendables-3-2014/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/07/The-Watchers-2024-Cover-01-570x257.jpg',
    title: 'THE WATCHERS (2024) | ශාපලත් වනාන්තරයේ අභිරහස් සත්වයෝ',
    url: 'https://baiscopedownloads.link/the-watchers-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2019/11/The-Exorcist-TV-2-768x346.jpg',
    title: 'THE EXORCIST (2016) SEASON 1 COMPLETE SEASON',
    url: 'https://baiscopedownloads.link/the-exorcist-2016/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/06/SNIPER-1993-570x257.jpg',
    title: 'SNIPER (1993) | සැගවුන වෙඩික්කරු',
    url: 'https://baiscopedownloads.link/sniper-1993/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/06/Uncle-Buck-1989-Cover-01-570x257.jpg',
    title: 'UNCLE BUCK (1989) | ළමයි බලාගන්න එන මැන්ටල් බක් මාමා',
    url: 'https://baiscopedownloads.link/infinitum-subject-unknown-2021/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2021/08/Infinitum-Subject-Unknown-2021-768x346.jpg',
    title: 'INFINITUM: SUBJECT UNKNOWN (2021) | අනන්තයට යන පාර දිගේ',
    url: 'https://baiscopedownloads.link/infinitum-subject-unknown-2021/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/06/Memory-2023-Cover-01-570x257.jpg',
    title: 'MEMORY (2023) | මතකය',
    url: 'https://baiscopedownloads.link/memory-2023-%e0%b6%b8%e0%b6%ad%e0%b6%9a%e0%b6%ba/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2015/06/Mad-Max-3-Beyond-Thunderdome-1985_800x360-570x257.jpg',
    title: 'MAD MAX 3: BEYOND THUNDERDOME (1985) | පැහැබර දවසක් සොයා.',
    url: 'https://baiscopedownloads.link/mad-max-3-beyond-thunderdome-1985/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2015/06/Mad-Max-1979_800x360-570x257.jpg',
    title: 'MAD MAX (1979) | තක්කඩි කල්ලි පාරට බැස්සොත්: මැක්ස් මෑඩ්.',
    url: 'https://baiscopedownloads.link/mad-max-1979/'
  },
];

const EnglishMovieScreen = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.grid}>
        {movies.map((movie, index) => (
          <TouchableOpacity key={index} style={styles.box} onPress={() => handlePress(movie.url)}>
            <Image source={{ uri: movie.poster }} style={styles.poster} />
            <View style={styles.overlay}>
              <Text style={styles.titleText}>{movie.title}</Text>
            </View>
            <View style={styles.languageContainer}>
              <Text style={styles.languageText}>{movie.language}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#151515',
    paddingVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: '45%',
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  poster: {
    width: 190,
    height: 100,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default EnglishMovieScreen;
