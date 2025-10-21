import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [isOpen,setisOpen] = useState(false);
  const [visitors, setVisitors] = useState(0);

  const displayVisitors =()=>{
    setVisitors(visitors+1);
  }
  return (
    <ScrollView
    style ={{flex:1, 
    backgroundColor:"#F5E6CA"
    ,}}
    
>

 <View
 style={styles.welcomAPP}
 >
  
      <Image
       source={require("@/assets/images/cf.png")}
       style={styles.imageCof}
       ></Image>

      <Text style={styles.textNameApp}>BrewTime Coffee App</Text>
      <Text style={styles.textWelcome}>Brienvenue</Text>
      
    </View>

     <View style={styles.containerBttn}>
      
      <TouchableOpacity
        style={styles.bttnMenu}
        onPress={() => alert("voir menu") }   
      >
        <Text style={styles.textBttn} 
      
        
          >Voir menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
                style={styles.bttnMenu}

        onPress= {displayVisitors}
        
      >

        <Text style={styles.textBttn}>Nombre du visiteur</Text>
      </TouchableOpacity>

    </View>

    <View  
    style={{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginBottom:40,

    }}>
  <Image
       source={require("@/assets/images/person.png")}
       style={styles.imagVisitor}
       ></Image>

  <Image
       source={require("@/assets/images/person.png")}
       style={styles.imagVisitor}
       ></Image>

  <Image
       source={require("@/assets/images/person.png")}
              style={styles.imagVisitor}

       ></Image>
      <Text style={styles.textvisiteur}> {visitors}
       
        <Text style={styles.textPerson}> Person</Text>
</Text>

    </View>

    
 
    </ScrollView>
 
      
  );
}
const styles = StyleSheet.create({
  welcomAPP:{
        justifyContent: "center",  
        alignItems: "center", 
      marginBottom:100,
      marginTop:10,

        },
  imageCof:{
width:294 ,
height:294,
marginTop: 20,
 borderRadius:15,
 shadowOpacity:0.5,
 shadowRadius:100,
  },
textNameApp :{
  color:"#6F4E37" ,
  fontWeight:"bold",fontSize:24,
  textAlign:"center"},

  textWelcome:{
          color:"#B6771D" },
  
    bttnMenu:{
          width: 264,
          height: 64,
          backgroundColor: "#6F4E37", 
          justifyContent: "center",    
          alignItems: "center",           
          borderRadius: 12,              
          marginBottom: 20,                  
        },

      containerBttn:
      { flex: 1, 
        justifyContent: "center",
         alignItems: "center",
         marginBottom:80 ,
},

        bttMenu:{ 
          color: "white", 
          fontSize: 20 , 
          fontWeight:"bold" ,},

          textBttn:{ color: "white",
            fontSize: 20 , 
            fontWeight:"bold",
},
        

          imagVisitor:{
        width:44 ,
        height:44,
        borderRadius:15},

         textvisiteur:{
         color:"#B6771D",
        marginLeft:20,
          fontWeight:"bold",
          fontSize:32 },
         
     textPerson:{
  color:"black",
  marginLeft:20 ,
  fontWeight:"bold",
  fontSize:24}
        

})
