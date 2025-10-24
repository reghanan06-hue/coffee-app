import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
//import React, { useEffect } from "react";

import React, { useState } from 'react';

export default function detail() {
    const router = useRouter();
    const [qte, setQte] = useState(0);
    const [sugar, setSugar] = useState(0);

  const { name, price, image, description } = useLocalSearchParams();
 
  const displayIncQte = () => {
    setQte(qte + 1);
  }
  const displayDesCcQte = () => {
    setQte((qte)=> (qte === 0 ? qte :  qte - 1));
  }

  const displayPusNbreSugar = () => {
    setSugar((sugar)=> (sugar == 5  ? sugar :  sugar + 1));
  }

  const displayMoinsNbreSugar = () => {
    setSugar((sugar)=> (sugar === 0 ? sugar :  sugar - 1));
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={33} color="#3B2F2F" />
      </TouchableOpacity>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price} MAD</Text>
      <Text style={styles.desc}>{description}</Text>
     
      <View style={styles.row_cup}>
        <TouchableOpacity
                 style={styles.bttn_Qte}
                 onPress={displayDesCcQte}
               >
       
                 <Text style={styles.textQte}> - </Text>
               </TouchableOpacity>
        
        <Text style={styles.TextnbreQte}> {qte}
        
                  <Text style={styles.Textcup}> Cups of coffee</Text>
                </Text>
             <TouchableOpacity
                 style={styles.bttn_Qte}
                 onPress={displayIncQte}
       
               >
       
                 <Text style={styles.textQte}> + </Text>
               </TouchableOpacity>
       
      </View>
       
        <View style={styles.row_cup}>
        <TouchableOpacity
                 style={styles.bttn_Qte}
                 onPress={displayMoinsNbreSugar}
               >
       
                 <Text style={styles.textQte}> - </Text>
               </TouchableOpacity>
        
        <Text style={styles.TextnbreQte}> {sugar}
        
                  <Text style={styles.Textcup}> pices of sugar</Text>
                </Text>
             <TouchableOpacity
                 style={styles.bttn_Qte}
                 onPress={displayPusNbreSugar}
       
               >
       
                 <Text style={styles.textQte}> + </Text>
               </TouchableOpacity>
       
      </View>
       
        
       <View style={styles.priceRow}>
        <Text style={styles.labelPrice} >Price :</Text>
         <Text style={styles.valeurPrice}>{qte * price } </Text>
        <Text style={styles.labelPrice}>MAD</Text>


       </View>
    
  
</View>

  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0",
    alignItems: "center",
    paddingTop: 100,
  },
  backButton: { position: "absolute", top: 40, left: 20 ,margin:30,},
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: "#3B2F2F",
    marginBottom: 20,
    marginTop: 10,
  },
  price: { fontSize: 18, color: "#7A6C5D", marginBottom: 20 },
  desc: { 
    color: "#3B2F2F", 
    fontSize: 15,
     textAlign: "center", 
     lineHeight: 22,
      padding:20, 
      fontWeight:500, },

  image: {
    width: 200,
    height: 200,
    marginTop:20,
    borderRadius: 35,
  },
   row_cup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop:30,
  },
 Textcup:{
  color:"#FB681F",
  fontSize: 20,
  fontWeight:"bold",

 },

 textQte:{
  fontSize: 20,
  fontWeight:"bold",
  color:"white",

 },
 TextnbreQte:{
  color:"black",
  fontSize: 20,
  fontWeight:"bold",

 },
 Textnbre:{
  color:"black",
  fontSize: 20,
  fontWeight:"bold",
 },
 

 bttn_Qte:{

    backgroundColor: "#6F4E37",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 8,
    color:"white",
 },
 
   priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  labelPrice:{
    fontSize:20,
    fontWeight:"bold",
    marginHorizontal: 6,
  },
  valeurPrice:{
    fontSize:20,
    fontWeight:"bold",
      color:"#FB681F",

  }

});
