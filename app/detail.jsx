import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function detail() {
  const router = useRouter();
  const { name, price, image, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={33} color="#3B2F2F" />
      </TouchableOpacity>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.desc}>{description}</Text>
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
  desc: { color: "#3B2F2F", fontSize: 15, textAlign: "center", lineHeight: 22, padding:20, fontWeight:500, },
  image: {
    width: 200,
    height: 200,
    marginTop:20,
    borderRadius: 35,
  }
});
