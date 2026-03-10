import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const { name, price, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del producto</Text>

      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.value}>{name}</Text>

      <Text style={styles.label}>Precio:</Text>
      <Text style={styles.value}>${price}</Text>

      <Text style={styles.label}>Descripción:</Text>
      <Text style={styles.value}>{description}</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
});
