import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, ImageBackground, FlatList, SafeAreaView } from "react-native";
import Search from "../components/Search";
import Layout from "../components/Layout";
import Pages from "../components/Pages";
import FeedList from "../components/FeedList";
import FeedBlock from "../components/FeedBlock";
import Navbar from "../components/NavBar";

const image = {uri: "https://images.unsplash.com/photo-1638132035918-90a22beaab3b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"};

export default function Feed() { 
  return (  
    <Layout title="Feed">
      <View style={styles.container}>
          <ImageBackground source={image} style={styles.container}>
            <View style={styles.header}>
              <Navbar left='Back' center='Feed'  right='Filter' />
              <Search />
              <StatusBar style="auto" />
            </View>
              <FeedList />
              <FeedBlock />
          </ImageBackground>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  sector: {
    margin: 10,
  },
  header: {
    marginBottom: 20,
  },
  scroll: {
    width: "100%",
    padding: 10
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
  },
});
