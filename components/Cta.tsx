import { View, Text, StyleSheet, ImageBackground } from 'react-native';


export default function Cta() {
  return (
    <View style={styles.cta}>
      <ImageBackground
        source={require("../assets/images/bg-cta.jpg")}
        style={styles.bgImage}
      >

        <Text style={styles.title}>Atualizações</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur adipisci vitae odit libero nihil fugiat quae, delectus cupiditate tenetur ducimus blanditiis temporibus vero dolore asperiores, dolores eligendi perspiciatis earum.</Text>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  cta:{
    width: "100%",
    height: 400,
    padding: 10
  },
  bgImage:{
    borderRadius: 30,
    height: "100%",
    padding: 10
  },
  title:{
    fontSize: 40,
    marginTop: 150,
    color: "white"
  },
  description:{
    color: "white",
    fontSize: 20
  }
});