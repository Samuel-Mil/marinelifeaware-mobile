import { View, Text, Linking,TouchableOpacity, StyleSheet, Image } from 'react-native';
import Header from './Header';

export default function Artigos() {
  const handlePress = async () => {
    const url = "";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Artigos"/>

      <View style={styles.artigos}>
        <View style={styles.artigo_single}>
          <Image source={require("../assets/images/turtle.jpg")} style={styles.art_image}/>
          <Text style={styles.art_single_title}>Titulo do artigo</Text>
          <Text style={styles.art_single_description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime porro dicta iste iure, quo minima libero fuga sunt esse culpa, quisquam illum qui earum dolor quam quis, commodi impedit? Quae?</Text>
          <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
            <Text>Ler mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.artigo_single}>
          <Image source={require("../assets/images/turtle.jpg")} style={styles.art_image}/>
          <Text style={styles.art_single_title}>Titulo do artigo</Text>
          <Text style={styles.art_single_description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime porro dicta iste iure, quo minima libero fuga sunt esse culpa, quisquam illum qui earum dolor quam quis, commodi impedit? Quae?</Text>
          <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
            <Text>Ler mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.artigo_single}>
          <Image source={require("../assets/images/turtle.jpg")} style={styles.art_image}/>
          <Text style={styles.art_single_title}>Titulo do artigo</Text>
          <Text style={styles.art_single_description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime porro dicta iste iure, quo minima libero fuga sunt esse culpa, quisquam illum qui earum dolor quam quis, commodi impedit? Quae?</Text>
          <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
            <Text>Ler mais</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 800
  },

  artigos:{
    padding: 10
  },

  artigo_single: {
    marginBottom: 20
  },

  art_single_title: {
    fontSize: 30,
    marginTop: 10
  },

  art_single_description: {
    fontSize: 20,
    marginBottom: 10
  },

  art_image:{
    width: "100%",
    height: 200
  },

  linkContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00FEFD",
    padding: 10
  }
});