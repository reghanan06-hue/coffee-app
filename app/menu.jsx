import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function menu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#3B2F2F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3E0",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin:30,
    gap:25,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#3B2F2F",
  }
});
