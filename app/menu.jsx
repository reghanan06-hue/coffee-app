import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function menu() {
  const router = useRouter();
  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      price: "10 MAD",
      image: require("../assets/images/Espresso.jpg"),
      description: "Un café court et intense préparé en faisant passer de l’eau chaude sous pression à travers du café moulu très fin. C’est la base de nombreux autres cafés comme le cappuccino et le latte.",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "18 MAD",
      image: require("../assets/images/Cappuccino.jpg"),
      description: "Un mélange équilibré d’espresso, de lait chaud et de mousse onctueuse. Il offre une texture crémeuse et un goût riche, souvent saupoudré de cacao.",
    },
    {
      id: 3,
      name: "Latte",
      price: "16 MAD",
      image: require("../assets/images/Latte.jpg"),
      description: "Un espresso adouci avec une grande quantité de lait chaud et une fine couche de mousse. Parfait pour ceux qui préfèrent un café doux et onctueux.",
    },
    {
      id: 4,
      name: "Cold Brew",
      price: "20 MAD",
      image: require("../assets/images/ColdBrew.jpg"),
      description: "Infusé à froid pendant plusieurs heures, ce café est doux, rafraîchissant et moins acide. Idéal pour les journées chaudes.",
    },
    {
      id: 5,
      name: "Mocha",
      price: "20 MAD",
      image: require("../assets/images/Mocha.jpg"),
      description: "Un délicieux mélange d’espresso, de lait chaud et de chocolat. Crémeux, sucré et gourmand — le choix parfait pour les amateurs de café et de cacao.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={33}
            color="#3B2F2F"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/detail",
                  params: { name: item.name, price: item.price ,image: item.image,description: item.description},
                })
              }
              style={styles.addButton}
            >
              <Ionicons name="add" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
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
    margin: 30,
    gap: 25,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#3B2F2F",
  },
  card: {
    backgroundColor: "#F2E6D8",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 35,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 23,
    fontWeight: "600",
    color: "#3B2F2F",
  },
  itemPrice: {
    color: "#7A6C5D",
    fontSize: 17,
  },
  addButton: {
    backgroundColor: "#4E3B2C",
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
