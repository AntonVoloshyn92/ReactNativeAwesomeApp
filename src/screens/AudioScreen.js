import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

export default function AudioScreen() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");

    const { sound } = await Audio.Sound.createAsync(
      require("../assets/Hello.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function stopSound() {
    await sound.stopAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button title="Play Sound" onPress={playSound} />
      </View>
      <View style={styles.containerButton}>
        <Button title="Stop Sound" onPress={stopSound} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerButton: {
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
