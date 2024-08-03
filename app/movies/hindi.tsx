
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const movies = [
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2019/04/Ek-Villain-2014.jpg',
    title: 'EK VILLAIN (2014) | දුෂ්ඨයෙක් පිලිබඳ වූ කතාන්දරය…',
    url: 'https://baiscopedownloads.link/ek-villain-2014/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/04/yodha-2024-cover.jpg',
    title: 'YODHA (2024) | යෝධා කාර්යා සාධක බලකායේ වික්‍රම',
    url: 'https://baiscopedownloads.link/yodha-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2021/08/Kaal-2005.jpg',
    title: 'KAAL (2005) | කොටියගේ අවතාරේ',
    url: 'https://baiscopedownloads.link/kaal-2005/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2019/09/Garam-Masala-2005-800x445-1-768x427.jpg',
    title: 'GARAM MASALA (2005) | බඩ පැලෙනකම් හිනාවෙමුද?',
    url: 'https://baiscopedownloads.link/garam-masala-2005/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/05/murder-mubarak-2024-cover-570x257.jpg',
    title: 'MURDER MUBARAK (2024) | ඝාතනයට සුභ පැතුමක්',
    url: 'https://baiscopedownloads.link/murder-mubarak-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/05/maidaan-2024-cover-570x257.jpg',
    title: 'MAIDAAN (2024) | පුනරාගමනය',
    url: 'https://baiscopedownloads.link/maidaan-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/05/madgaon-express-2024-cover-570x257.jpg',
    title: 'MADGAON EXPRESS (2024) | පෙරුම් පුරල ගිය සංචාරය',
    url: 'https://baiscopedownloads.link/madgaon-express-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2018/06/Missing-2018-768x346.jpg',
    title: 'MISSING (2018) | අතුරුදහන්වීම',
    url: 'https://baiscopedownloads.link/missing-2018/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2020/05/Junooniyat-2016-768x346.jpg',
    title: 'JUNOONIYAT (2016) | ඔබේ ආලය මගේ සිහසුනයි…',
    url: 'https://baiscopedownloads.link/junooniyat-2016/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/05/Maya-2001-570x257.jpg',
    title: 'MAYA (2001) | වැඩිවියට පැමිණි පසු…',
    url: 'https://baiscopedownloads.link/maya-2001/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2021/06/M.S.-Dhon-The-Untold-Story-2016-768x346.jpg',
    title: 'M.S. DHONI: THE UNTOLD STORY (2016) | සුපිරි පිතිහරඹයක නො ඇසූ කතාව…[BLURAY UPDATES]',
    url: 'https://baiscopedownloads.link/m-s-dhoni-the-untold-story-2016/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/04/Monkey-Man-2024-a-1536x691-1-570x256.jpg',
    title: 'MONKEY MAN (2024) | දෛවයේ ලියුවුණු වියරු පලිගැනීම',
    url: 'https://baiscopedownloads.link/monkey-man-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/04/Article-370-2024-cover-570x257.jpg',
    title: 'ARTICLE 370 (2024) | වගන්තියක හිරවීම',
    url: 'https://baiscopedownloads.link/article-370-2024/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2018/12/Badhaai-Ho-2018-768x346.jpg',
    title: 'BADHAAI HO (2018) | ලැජ්ජාවේ බෑ.. සන්තෝසේ බෑ…',
    url: 'https://baiscopedownloads.link/badhaai-ho-2018/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/04/GUTHLEE-LADOO-Cover--570x257.jpg',
    title: 'GUTHLEE LADOO (2023) | කසල ගොඩේ පැළ වුන බීජය',
    url: 'https://baiscopedownloads.link/guthlee-ladoo-2023/'
  },
  {
    poster: 'https://baiscopedownloads.link/wp-content/uploads/2024/04/Teri-Baaton-Mein-Aisa-Uljha-Jiya-2024-Cover-01-570x257.jpg',
    title: 'TERI BAATON MEIN AISA ULJHA JIYA (2024) | තේරීම',
    url: 'https://baiscopedownloads.link/teri-baaton-mein-aisa-uljha-jiya-2024/'
  },
];

const HindiMovieScreen = () => {
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

export default HindiMovieScreen;
