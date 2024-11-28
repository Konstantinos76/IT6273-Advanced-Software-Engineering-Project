import { StyleSheet, View, Text } from "react-native";
import { theme } from "../theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>IT6273 Advanced Software Engineering Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorBlack,
    justifyContent: "center",
  },
  text: {
    color: theme.colorWhite,
    fontSize: 16,
    textAlign: "center",
  }
});
