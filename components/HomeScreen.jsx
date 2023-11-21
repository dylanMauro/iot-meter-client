import { View, Text, Pressable, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { useContext } from "react"
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({navigation}) {
  const {logout} = useContext(AuthContext)
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#808080"}}>
      <View style={styles.homeCardContainer}>
        <Pressable style={styles.homeCard} onPress={()=> navigation.navigate("Consume")}>
          <Image style={{height:180, width: 180, position: "absolute", borderRadius: 40}} source={require("../assets/consumoel.jpeg")}/>
            <Text style={styles.homeCardTitle}>Revisar consumo</Text>
        </Pressable>      
        <Pressable style={styles.homeCard} onPress={()=> navigation.navigate("Consume")}>
          <Image style={{height:180, width: 180, position: "absolute", borderRadius: 40}} source={require("../assets/descarga.png")}/>
            <Text style={styles.homeCardTitle}>Revisar consumo</Text>
        </Pressable> 
      </View>
      <View style={styles.homeCardContainer}>
      <Pressable style={styles.homeCard} onPress={()=> navigation.navigate("Consume")}>
          <Image style={{height:180, width: 180, position: "absolute", borderRadius: 40}} source={require("../assets/descarga.png")}/>
            <Text style={styles.homeCardTitle}>Revisar consumo</Text>
        </Pressable>      
        <Pressable style={styles.homeCard} onPress={()=> navigation.navigate("Consume")}>
          <Image style={{height:180, width: 180, position: "absolute", borderRadius: 40}} source={require("../assets/descarga.png")}/>
            <Text style={styles.homeCardTitle}>Revisar consumo</Text>
        </Pressable> 
      </View>
      <View style={styles.homeCardContainer}>
      <Pressable style={styles.homeCard} onPress={()=> navigation.navigate("Consume")}>
          <Image style={{height:180, width: 180, position: "absolute", borderRadius: 40}} source={require("../assets/config.png")}/>
            <Text style={styles.homeCardTitle}>Configuración</Text>
        </Pressable>      
        <Pressable style={styles.homeCard} onPress={logout}>
          <Image style={{height:180, width: 180, position: "absolute", borderRadius: 40}} source={require("../assets/cerrar.PNG")}/>
            <Text style={styles.homeCardTitle}>Cerrar sesión</Text>
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
    backgroundColor:"#808080",
    
  },
  homeCardTitle: {
    fontSize: 18,
    color: "white",
    fontFamily:"Cascadia Code",
    marginBottom:15,
    padding: 4,
    borderRadius: 5,   
    backgroundColor:"rgba(0, 0, 0, 0.8)",
  }
})

