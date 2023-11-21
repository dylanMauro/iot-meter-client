import { View, Text, Dimensions, StyleSheet } from "react-native"
import { LineChart } from "react-native-chart-kit"
import io from "socket.io-client"
import { AuthContext } from "../context/AuthContext"
import { useContext, useState } from "react"

const socket = io("http://localhost:3000/")

export default function ConsumePage() {
  const {userToken} = useContext(AuthContext)
  const [watts, setWatts] = useState([])
  const [totalWatts, setTotalWatts] = useState(0)

  socket.emit("client:solicitarDatos", userToken)

  socket.on("server:enviarDatos", ({datos, totalMes}) => {
    setWatts(datos.map(dato => dato.watts))
    setTotalWatts(totalMes[0].suma)
  })

  return (
    <View style={ { justifyContent: "center", alignItems: "center" } }>
      <Text style={{marginTop:10, fontSize: 20, fontStyle:"italic"}}>
        Pagina de revisar consumo
      </Text>
      <LineChart data={{
        //labels: watts.map((dato, index) => ""),
        datasets: [
            {
              data: watts
            }   
        ] 
        }}
        width={Dimensions.get("window").width - 10}
        height={300}
        chartConfig={{
          backgroundGradientFrom: "#0000FF",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false // optional
        }}
        style= {{
          borderRadius: 10,
          paddingTop: 10
        }}
        yAxisSuffix="W"
      />   
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.payPrice}>${parseInt(totalWatts*0.82)}</Text>
          <Text style={styles.info}>Total a pagar</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.whatts}>{parseInt(totalWatts/1000)} KWh</Text>
          <Text style={styles.info}>Consumo total</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  payPrice: {
    color: "green",
    fontSize: 30,
  },
  whatts: {
    color: "red",
    fontSize: 30,
  },
  infoContainer: {
    flexDirection: "row",
  },
  infoCard: {
    justifyContent:"center",
    alignItems:"center",
    height:110,
    width:155,
    marginHorizontal:20,
    marginTop: 10,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  info: {
    color: "white",
  }
})