import Colors from "@/constants/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton({ children, onPress }: { children: React.ReactNode; onPress: () => void | Promise<void> }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary700,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
