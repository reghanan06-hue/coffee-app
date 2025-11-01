import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

export default function Teams() {
  const router = useRouter();

  const myTeams = [
    { id: 1, firstname: 'Hanan', lastname: 'Ragban', classname: 'Dev Dojo' },
    { id: 2, firstname: 'Zakia', lastname: 'Taoufik', classname: 'Dev Dojo' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={33} color="#3B2F2F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Team</Text>
      </View>

      <Text style={styles.teamText}>The team created the BrewTime</Text>

      <FlatList
        data={myTeams}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>
              <Text style={styles.label}>First name: </Text>
              {item.firstname}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Last name: </Text>
              {item.lastname}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>Class name: </Text>
              {item.classname}
            </Text>
          </View>
        )}
       
       
        ListFooterComponent={
           <View style={{ alignItems: "center", marginTop: 4 }}>

    <Text style={styles.textSys}>System of work</Text>
          <View style={styles.columnsContainer}>

            <View style={[styles.bar, { backgroundColor: "blue" }]} />
            <View style={[styles.bar, { backgroundColor: "orange" }]} />
            <View style={[styles.bar, { backgroundColor: "red" }]} />
            <View style={[styles.bar, { backgroundColor: "green" }]} />
         
          </View>
          <View style={styles.valPrcentage}>   
             <Text style={styles.footerText}>50%</Text>
 </View>
       <View style={styles.rowContainer}>
                 <View style={[styles.barInfo, { backgroundColor: "blue" }]} />

              <Text style={styles.TextInfo}> Mobile App Management</Text>
         
               </View>
            <View style={styles.rowContainer}>
                 <View style={[styles.barInfo, { backgroundColor: "orange" }]} />

              <Text style={styles.TextInfo}> Create design</Text>
         
               </View>
                <View style={styles.rowContainer}>
                 <View style={[styles.barInfo, { backgroundColor: "red" }]} />

              <Text style={styles.TextInfo}> Problem solving</Text>
         
               </View>
                <View style={styles.rowContainer}>
                 <View style={[styles.barInfo, { backgroundColor: "green" }]} />

              <Text style={styles.TextInfo}> Harmony and teamwork</Text>
         
               </View>



               
           </View>
        }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    gap: 25,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#3B2F2F",
  },
  teamText: {
    color: '#633d04ff',
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: '#7B542F',
    marginVertical: 5,
    alignItems: "center",
    padding: 20,
    borderRadius: 12,
    shadowColor: '#d0be4bff',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  text: {
    fontSize: 20,
    color: '#eee6e4ff',
  },
  label: {
    fontWeight: 'bold',
    color: '#432323',
  },
  columnsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#eee6e4ff",
    marginTop: 10,
    marginBottom: 0,
  },
  bar: {
    width: 40,
    height: "100%",
    borderRadius: 5,
    margin:10,
  },

  textSys:{
    color:"black",
    fontSize:20,
    fontWeight:"bold",
  },
  valPrcentage:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "flex-start"
    
  },
  footerText:{
    fontSize:20,
    fontWeight:"bold",
     textAlign: "center",

  },
  barInfo:{
     width: 40,
     height:20,
   
     marginLeft:25,
  
  },
  rowContainer:{
    width: 400,
marginTop:10,
    flexDirection: "row",        
        
  },
    imageInfo:{
      width:20,
      height:20,
    },
    TextInfo:{fontSize:20,},
});
