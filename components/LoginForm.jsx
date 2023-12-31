import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState, useContext } from "react"
import { AuthContext } from '../context/AuthContext';
import axios from "axios"

export default function LoginForm({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login, userToken} = useContext(AuthContext)
  const [error, setError] = useState("")

  const handlePress = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/client-login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                nombreUsuario: username,
                contraseña: password
            })
        });
      const token = await res.json()
      if (token.token === undefined ) {
        setError("Usuario o contraseña incorrecta")
        setUsername("");
        setPassword("");
        return login(null)
      }
      setUsername("");
      setPassword("");
      login(token.token)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.formTitle}>Iniciar Sesión</Text>        
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <View>
          <View>
            <Text style={styles.errorText}>
              {error.length !== 0 ? error : "" }
            </Text>
          </View>
          <Text style={styles.notRegistered}>¿Aún no estas registrado? presiona aquí</Text>
          <Pressable 
            onPress={handlePress}
            style={styles.formButton}
            title="Iniciar Sesión"
          >
            <Text style={styles.formButtonText}>Ingresar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#808080",
    marginTop: 15
  },
  formTitle: {
    fontSize: 25,
    alignSelf:"center"
    },
  formButton: {    
    marginTop: 15,
    backgroundColor: "blue",
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 3,
  },
  formButtonText: {
    color: "white",
    alignSelf:"center"
  },
  notRegistered: {
    fontSize: 12,
    color: "blue",
    marginTop: 6
  },
  errorText: {
    paddingTop:3,
    color:"red",
    fontSize:12
  }

});