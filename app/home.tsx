import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';

const movies = {
  Latest: [
    { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
    { title: "හවුස් ඔෆ් ද ඩ්‍රගන් [S02: E05] | රජවුණු ඒමන්ඩ් (18+)", image: require('@/assets/images/english/HOD.jpg') },
    { title: "The Boy and the Heron (2023) | කෙසේද ඔබ දිවි ගෙවන්නෙ?", image: require('@/images/japanese/The-Boy-Heron-2023.jpg') },
    { title: "BERSERK (1997) [S01 : E05 & E06] | දෛවයේ ලියවුනු යක්ෂයා", image: require('@/assets/images/japanese/Berserk-1997-1998.jpg') },
    { title: "WWE RAW 2024/06/17", image: require('@/assets/images/wwe/') },
  ],
  Movie: [
    { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
    { title: "EK VILLAIN (2014) | දුෂ්ඨයෙක් පිලිබඳ වූ කතාන්දරය…", image: require('@/assets/images/hindi/Ek-Villain-2014.jpg') },
    { title: "MAHARAJA (2024) | සර් ලක්‍ෂ්මිව හොයලා දෙන්න සර්.", image: require('@/assets/images/tamil/Maharaja-2024.jpg') },
    { title: "Seethamma Vakitlo Sirimalle Chettu (2013) | මිනිසත්කමේ බැදීම..", image: require('@/assets/images/telagu/Seethamma-Vakitlo-Sirimalle-Chettu-2013.jpg') },
    { title: "Malayalee from India (2024) | තවත් එක යාළුවෙක්", image: require('@/assets/images/malayalam/Malayalee-From-India-2024.jpg') },
    { title: "Blink (2024) | ඇසි පිය නොසලන්න", image: require('@/assets/images/kannada/blink-2024.jpg') },
  ],
  Tv_Series: [
    { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
    { title: "EK VILLAIN (2014) | දුෂ්ඨයෙක් පිලිබඳ වූ කතාන්දරය…", image: require('@/assets/images/hindi/Ek-Villain-2014.jpg') },
    { title: "MAHARAJA (2024) | සර් ලක්‍ෂ්මිව හොයලා දෙන්න සර්.", image: require('@/assets/images/tamil/Maharaja-2024.jpg') },
    { title: "Seethamma Vakitlo Sirimalle Chettu (2013) | මිනිසත්කමේ බැදීම..", image: require('@/assets/images/telagu/Seethamma-Vakitlo-Sirimalle-Chettu-2013.jpg') },
    { title: "Malayalee from India (2024) | තවත් එක යාළුවෙක්", image: require('@/assets/images/malayalam/Malayalee-From-India-2024.jpg') },
    { title: "Blink (2024) | ඇසි පිය නොසලන්න", image: require('@/assets/images/kannada/blink-2024.jpg') },
  ],
  Animation: [
    { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
    { title: "EK VILLAIN (2014) | දුෂ්ඨයෙක් පිලිබඳ වූ කතාන්දරය…", image: require('@/assets/images/hindi/Ek-Villain-2014.jpg') },
    { title: "MAHARAJA (2024) | සර් ලක්‍ෂ්මිව හොයලා දෙන්න සර්.", image: require('@/assets/images/tamil/Maharaja-2024.jpg') },
    { title: "Seethamma Vakitlo Sirimalle Chettu (2013) | මිනිසත්කමේ බැදීම..", image: require('@/assets/images/telagu/Seethamma-Vakitlo-Sirimalle-Chettu-2013.jpg') },
    { title: "Malayalee from India (2024) | තවත් එක යාළුවෙක්", image: require('@/assets/images/malayalam/Malayalee-From-India-2024.jpg') },
    { title: "Blink (2024) | ඇසි පිය නොසලන්න", image: require('@/assets/images/kannada/blink-2024.jpg') },
  ],
  Animation_Series: [
    { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
    { title: "EK VILLAIN (2014) | දුෂ්ඨයෙක් පිලිබඳ වූ කතාන්දරය…", image: require('@/assets/images/hindi/Ek-Villain-2014.jpg') },
    { title: "MAHARAJA (2024) | සර් ලක්‍ෂ්මිව හොයලා දෙන්න සර්.", image: require('@/assets/images/tamil/Maharaja-2024.jpg') },
    { title: "Seethamma Vakitlo Sirimalle Chettu (2013) | මිනිසත්කමේ බැදීම..", image: require('@/assets/images/telagu/Seethamma-Vakitlo-Sirimalle-Chettu-2013.jpg') },
    { title: "Malayalee from India (2024) | තවත් එක යාළුවෙක්", image: require('@/assets/images/malayalam/Malayalee-From-India-2024.jpg') },
    { title: "Blink (2024) | ඇසි පිය නොසලන්න", image: require('@/assets/images/kannada/blink-2024.jpg') },
  ],
  WWE: [
    { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
    { title: "EK VILLAIN (2014) | දුෂ්ඨයෙක් පිලිබඳ වූ කතාන්දරය…", image: require('@/assets/images/hindi/Ek-Villain-2014.jpg') },
    { title: "MAHARAJA (2024) | සර් ලක්‍ෂ්මිව හොයලා දෙන්න සර්.", image: require('@/assets/images/tamil/Maharaja-2024.jpg') },
    { title: "Seethamma Vakitlo Sirimalle Chettu (2013) | මිනිසත්කමේ බැදීම..", image: require('@/assets/images/telagu/Seethamma-Vakitlo-Sirimalle-Chettu-2013.jpg') },
    { title: "Malayalee from India (2024) | තවත් එක යාළුවෙක්", image: require('@/assets/images/malayalam/Malayalee-From-India-2024.jpg') },
    { title: "Blink (2024) | ඇසි පිය නොසලන්න", image: require('@/assets/images/kannada/blink-2024.jpg') },
  ],
};

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('@/assets/images/homeLogo.png')} style={styles.logo} />
      {Object.keys(movies).map((language, index) => (
        <View key={index}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{language}</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal>
            {movies[language].map((movie, idx) => (
              <Card key={idx} style={styles.card}>
                <Card.Cover source={movie.image} style={styles.cardPic} />
                <Card.Content>
                  <Title style={styles.title}>{movie.title}</Title>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#151515',
  },
  logo: {
    width: 400,
    height: 218,
    alignSelf: 'center',
    marginBottom: 75,
  },
  cardPic: {
    width: 190,
    height: 100,
  },
  title: {
    color: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  seeAll: {
    fontSize: 14,
    color: '#841584',
  },
  card: {
    width: 190,
    marginRight: 10,
    backgroundColor: '#000000',
  },
});

export default HomeScreen;
