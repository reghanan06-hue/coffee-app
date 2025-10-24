import { router, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const router = useRouter();
  const [visits, setVisits] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadVisits = async () => {
      try {
        const savedVisits = await AsyncStorage.getItem("visits");
        const currentVisits = savedVisits ? parseInt(savedVisits) + 1 : 1;
        setVisits(currentVisits);
        await AsyncStorage.setItem("visits", currentVisits.toString());
      } catch (error) {
        console.log("Erreur lors du chargement :", error);
      }
    };

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    loadVisits();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#FAF3E0" }}>
      <Animated.View style={[styles.welcomAPP, { opacity: fadeAnim }]}>
        <Image
          source={require("../assets/images/cf.png")}
          style={styles.imageCof}
        />
        <Text style={styles.textNameApp}>BrewTime Coffee App</Text>
      </Animated.View>

      <View style={styles.containerBttn}>
        <TouchableOpacity
          style={styles.bttnMenu}
          onPress={() => router.push("/menu")}
        >
          <Text style={styles.textBttn}>Voir menu</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <Image
          source={require("../assets/images/person.png")}
          style={styles.imagVisitor}
        />
        <Text style={styles.textvisiteur}>
          {" "}
          {visits}
          <Text style={styles.textPerson}> Visitors</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcomAPP: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    paddingTop: 50,
  },
  imageCof: {
    width: 294,
    height: 294,
    marginTop: 20,
    borderRadius: 15,
    shadowOpacity: 0.5,
    shadowRadius: 100,
  },
  textNameApp: {
    color: "#4E3B2C",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },

  textWelcome: {
    color: "#B6771D",
  },

  bttnMenu: {
    width: 264,
    height: 64,
    backgroundColor: "#4E3B2C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 20,
  },

  containerBttn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },

  bttMenu: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  textBttn: { color: "white", fontSize: 20, fontWeight: "bold" },

  imagVisitor: {
    width: 44,
    height: 44,
    borderRadius: 15,
  },

  textvisiteur: {
    color: "#B6771D",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 32,
  },

  textPerson: {
    color: "#4E3B2C",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
});
