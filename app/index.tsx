import GameOverScreen from "@/screens/GameOverScreen";
import GameScreen from "@/screens/GameScreen";
import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const handleStartGame = (number: number) => {
    setUserNumber(number);
    setGameOver(false);
  };

  let screen = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={() => {
          setGameOver(true);
        }}
      />
    );
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.appContainer}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.appContainer}>
          <ImageBackground
            source={require("@/assets/images/dice.jpg")}
            style={styles.appContainer}
            resizeMode="cover"
            imageStyle={styles.backgroundImage}>
            {screen}
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
