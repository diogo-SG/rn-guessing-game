import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import Colors from "@/constants/colors";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: { userNumber: number; onGameOver: () => void }) {
  const [currentGuess, setCurrentGuess] = useState<number>(generateRandomBetween(minBoundary, maxBoundary, userNumber));

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if ((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNum);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent&apos;s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.question}>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>+</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>-</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  number: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
  },
});
