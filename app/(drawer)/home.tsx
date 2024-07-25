import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';

const movies = {
  Latest: {
    route: '/latest',
    data: [
      { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
      { title: "හවුස් ඔෆ් ද ඩ්‍රගන් [S02: E05] | රජවුණු ඒමන්ඩ් (18+)", image: require('@/assets/images/english/HOD.jpg') },
      { title: "The Boy and the Heron (2023) | කෙසේද ඔබ දිවි ගෙවන්නෙ?", image: require('@/assets/images/japanese/The-Boy-Heron-2023.jpg') },
      { title: "BERSERK (1997) [S01 : E05 & E06] | දෛවයේ ලියවුනු යක්ෂයා", image: require('@/assets/images/japanese/Berserk-1997-1998.jpg') },
      { title: "WWE RAW 2024/06/17", image: require('@/assets/images/wwe/20240617_RAW.jpg') },
    ],
  },
  Movie: {
    route: '/movies',
    data: [
      { title: "I Am Number Four (2011) | අංක තුනෙන් පසු…", image: require('@/assets/images/english/I-Am-Number-Four-2011.jpg') },
      { title: "EK VILLAIN (2014) | දුෂ්ඨයෙක් පිලිබඳ වූ කතාන්දරය…", image: require('@/assets/images/hindi/Ek-Villain-2014.jpg') },
      { title: "MAHARAJA (2024) | සර් ලක්‍ෂ්මිව හොයලා දෙන්න සර්.", image: require('@/assets/images/tamil/Maharaja-2024.jpg') },
      { title: "Seethamma Vakitlo Sirimalle Chettu (2013) | මිනිසත්කමේ බැදීම..", image: require('@/assets/images/telagu/Seethamma-Vakitlo-Sirimalle-Chettu-2013.jpg') },
      { title: "Malayalee from India (2024) | තවත් එක යාළුවෙක්", image: require('@/assets/images/malayalam/Malayalee-From-India-2024.jpg') },
    ],
  },
  Tv_Series: {
    route: '/tvSeries',
    data: [
      { title: "හවුස් ඔෆ් ද ඩ්‍රගන් [S02: E05] | රජවුණු ඒමන්ඩ් (18+)", image: require('@/assets/images/english/HOD.jpg') },
      { title: "MIRZAPUR [S03 : E01] | අවි ගත්තෝ අවියෙන්ම නසී ..", image: require('@/assets/images/hindi/Mirzapur.jpg') },
      { title: "Inspector Rishi Complete Season", image: require('@/assets/images/tamil/Inspector-Rishi-2024.jpg') },
      { title: "Dhootha (2023) Complete Season", image: require('@/assets/images/telagu/Dhootha-2023.webp') },
      { title: "My Country: The New Age [S01 : E06] | බන්ග්-වොන්", image: require('@/assets/images/korean/My-Country-The-New-Age-2019.jpg') },
    ],
  },
  Animation: {
    route: '/animation',
    data: [
      { title: "The Boy and the Heron (2023) | කෙසේද ඔබ දිවි ගෙවන්නෙ?", image: require('@/assets/images/japanese/The-Boy-Heron-2023.jpg') },
      { title: "ULTRAMAN: RISING (2024) | ”යුතුකමකට එහා ගිය වගකීම”", image: require('@/assets/images/english/Ultraman-Rising-2024.jpg') },
      { title: "THE GARFIELD MOVIE (2024) | ගාෆීල්ඩ්ගේ කිරි හොරකම!", image: require('@/assets/images/english/Garfield.jpg') },
      { title: "SCARYGIRL (2023) | බූවලු කෙල්ලගේ වැඩකිඩ", image: require('@/assets/images/english/Scary-Girl-2023.jpg') },
      { title: "MABOROSHI (2023) | අත්‍යත යථාර්ථයක සිරවී…", image: require('@/assets/images/japanese/Maboroshi-2023.jpg') },
    ],
  },
  Animation_Series: {
    route: '/animationSeires',
    data: [
      { title: "BERSERK (1997) [S01 : E05 & E06] | දෛවයේ ලියවුනු යක්ෂයා", image: require('@/assets/images/japanese/Berserk-1997-1998.jpg') },
      { title: "THE ELUSIVE SAMURAI [S01 : E01] | ෂෝගුනේට් හී බිඳවැටීම", image: require('@/assets/images/japanese/The-Elusive-Samurai-S01-2.jpg') },
      { title: "DEMON SLAYER: KIMETSU NO YAIBA [S04 : E08] | අවසන් යුද්ධය ඇරඹෙයි!", image: require('@/assets/images/japanese/Demon-Slayer-Season-04.jpg') },
      { title: "KAIJU NO. 8 [S01 : E11] | හිබිනො කෆ්කා", image: require('@/assets/images/japanese/Kaiju-No.-8.jpg') },
      { title: "SUICIDE SQUAD ISEKAI [S01 : E02] | හිරෙන් පැනයාම!", image: require('@/assets/images/japanese/Suicide-Squad-ISEKAI-2024.jpg') },
    ],
  },
  WWE: {
    route: '/wwe',
    data: [
      { title: "WWE RAW 2024/06/17", image: require('@/assets/images/wwe/20240617_RAW.jpg') },
      { title: "WWE RAW 2024/06/10", image: require('@/assets/images/wwe/20240603_RAW.jpg') },
      { title: "WWE SMACKDOWN 2024/06/14", image: require('@/assets/images/wwe/20240613.jpg') },
      { title: "WWE SMACKDOWN 2024/06/07", image: require('@/assets/images/wwe/20240531.jpg') },
      { title: "WWE NXT 2024/06/04", image: require('@/assets/images/wwe/18Zey12M.jpg') },
    ],
  },
};

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('@/assets/images/homeLogo.png')} style={styles.logo} />
      {Object.keys(movies).map((language, index) => (
        <View key={index}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{language}</Text>
            <TouchableOpacity><Link href={movies[language].route} style={styles.seeAll}>See all</Link></TouchableOpacity>
          </View>
          <ScrollView horizontal>
            {movies[language].data.map((movie, idx) => (
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
    backgroundColor: '#0B1F3B',
  },
});

export default HomeScreen;