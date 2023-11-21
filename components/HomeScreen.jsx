import { View, Text, Pressable, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { useContext } from "react"
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({navigation}) {
  const {logout} = useContext(AuthContext)
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#808080"}}>
      <View style={styles.homeCardContainer}>
        <Pressable onPress={()=> navigation.navigate("Consume")}>
          <ImageBackground style={styles.homeCard} source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png'}}>
            <Text style={styles.homeCardTitle}>Revisar consumo</Text>
          </ImageBackground>
        </Pressable>      
        <Pressable onPress={()=> navigation.navigate("People")}>
          <ImageBackground style={styles.homeCard} source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png'}}>
            <Text style={styles.homeCardTitle}>Presiona aqui</Text>
          </ImageBackground>
        </Pressable> 
      </View>
      <View style={styles.homeCardContainer}>
        <Pressable onPress={()=> navigation.navigate("Consume")}>
          <ImageBackground style={styles.homeCard} source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png'}}>
            <Text style={styles.homeCardTitle}>Presiona aqui</Text>
          </ImageBackground>
        </Pressable>      
        <Pressable onPress={()=> navigation.navigate("Consume")}>
          <ImageBackground style={styles.homeCard} source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png'}}>
            <Text style={styles.homeCardTitle}>Presiona aqui</Text>
          </ImageBackground>
        </Pressable> 
      </View>
      <View style={styles.homeCardContainer}>
        <Pressable onPress={()=> navigation.navigate("Consume")}>
          <ImageBackground style={styles.homeCard} source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png'}}>
            <Text style={styles.homeCardTitle}>Presiona aqui</Text>
          </ImageBackground>
        </Pressable>      
        <Pressable onPress={()=> navigation.navigate("Consume")}>
          <ImageBackground style={styles.homeCard} source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png'}}>
            <Text style={styles.homeCardTitle}>Presiona aqui</Text>
          </ImageBackground>
        </Pressable> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeCardContainer: {
    flex:1,
    flexDirection: "row",
    paddingVertical:10,
    width: Dimensions.get("window").width,
  },
  homeCard: {
    width: 180,
    height: 180,
    borderRadius: 40,
    marginHorizontal: 10,
    justifyContent:"end",
    alignItems:"center",
  },
  homeCardTitle: {
    fontSize: 18,
    color: "white",
    fontFamily:"Cascadia Code",
    marginBottom:15,   
    backgroundColor:"rgba(0, 0, 0, 0.8)",
  }
})

