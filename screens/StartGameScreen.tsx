import PrimaryButton from "@/components/PrimaryButton";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

function StartGameScreen({ onStartGame }: { onStartGame: (number: number) => void }) {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: () => setEnteredNumber("") },
      ]);
      return;
    }
    setEnteredNumber("");
    onStartGame(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="number-pad"
        style={styles.numberInput}
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={(value) => setEnteredNumber(value)}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => setEnteredNumber("")}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    padding: 16,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
