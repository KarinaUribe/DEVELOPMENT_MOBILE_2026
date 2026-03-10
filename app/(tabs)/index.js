import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const MENU_DATA = [
  {
    id: "1",
    name: "Pizza",
    price: "12.000",
    description: "Queso, tomate, peperoni, albahaca, piña",
  },
  {
    id: "2",
    name: "Perro",
    price: "15.000",
    description: "Pan, salchicha, tocineta, salsas, ripio",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primer proyecto en React Native</Text>

      <FlatList
        data={MENU_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/details",
                params: {
                  name: item.name,
                  price: item.price,
                  description: item.description,
                },
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    marginTop: 5,
    fontSize: 16,
  },
});
