import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

export default function Order() {
  const router = useRouter();

  return (
    <View style={{ alignItems: "center" }}>

      <View style={styles.typecoff}>
        <Image source={require("../assets/images/coffee-cup.png")} style={styles.Pic_cup} />
        <Text style={styles.NameCof}>Mocha</Text>
      </View>
      </View>

  );
}

const styles = StyleSheet.create({
   typecoff: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    marginTop: 10,

  },
  Pic_cup: {
    width: 294,
    height: 294,
    marginTop: 20,
    borderRadius: 15,
    shadowOpacity: 0.5,
    shadowRadius: 100,
  },
  NameCof: {
    color: "#CD2C58",
    fontWeight: "bold", fontSize: 24,
    textAlign: "center"
  },

  bttn_cup:{
    color:"green",

  },
  textBttn:{
    backgroundColor:"red",
  }
});
