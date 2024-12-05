import { StyleSheet, View, Text } from "react-native";
import { theme } from "../theme";
import { RecipeListView } from "@/components/RecipeListView";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello IT6273 Advanced Software Engineering Project</Text> */}
      <RecipeListView />
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
