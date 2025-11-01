import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Delivery() {
  const [name, setName] = useState("");
  const [telphone, setTelphone] = useState("");
  const [savedName, setSavedName] = useState("");
  const [savedTel, setSavedTel] = useState("");

  const router = useRouter();

  // --- Save Name ---
  const saveName = async () => {
    try {
      await AsyncStorage.setItem("userName", name);
      setSavedName(name);
      alert("Nom enregistré !");
    } catch (e) {
      console.log(e);
    }
  };

  // --- Save Tel ---
  const saveTel = async () => {
    try {
      await AsyncStorage.setItem("phone", telphone);
      setSavedTel(telphone);
      alert("Tel enregistré !");
    } catch (e) {
      console.log(e);
    }
  };

  // --- Load Saved Name ---
  useEffect(() => {
    const loadName = async () => {
      const value = await AsyncStorage.getItem("userName");
      if (value) setSavedName(value);
    };
    loadName();
  }, []);

  // --- Load Saved Tel ---
  useEffect(() => {
    const loadTel = async () => {
      const value = await AsyncStorage.getItem("phone");
      if (value) setSavedTel(value);
    };
    loadTel();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
       <View style={styles.header}>
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons
                  name="arrow-back"
                  size={33}
                  color="#3B2F2F"
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Save Order</Text>
            </View>
      <View style={{ marginTop: 100 }}>
        <TextInput
          placeholder="Entrer votre nom"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Entrer votre tel"
          value={telphone}
          onChangeText={setTelphone}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            saveName();
            saveTel();
          }}
        >
          <Text style={styles.saveButtonText}>Enregistrer</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16 }}> Nom enregistré : {savedName}</Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>
             Tel enregistré : {savedTel}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.bttn_team}
          onPress={() => router.push({ pathname: "/teams" })}
        >
          <Text style={styles.textTeam}>Team create app</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    gap: 25,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3B2F2F",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 8,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: "#6F4E37",
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bttn_team: {
    width: 200,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#6F4E37",
    marginVertical: 80,
    alignSelf: "center",
  },
  textTeam: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 8,
  },
 
  bar: {
    width: 40,
    height: "100%",
    borderRadius: 5,
  },
});
