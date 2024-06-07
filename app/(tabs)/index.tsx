import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Header from "../../components/Header";
import Cta from "../../components/Cta";
import Artigos from "../../components/Artigos";
import Videos from "../../components/Videos";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";

export default function HomeScreen() {
  return (
   <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <Header title="Marinelifeaware" />
      <Cta />
      <Artigos/>
      <Videos/>
      <Contato/>
      <Footer />
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1
  },
  
  container:{
    backgroundColor: "#F3F3F3"
  },
});