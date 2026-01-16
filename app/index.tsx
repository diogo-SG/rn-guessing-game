import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.appContainer}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
