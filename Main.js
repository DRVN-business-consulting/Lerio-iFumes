import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import MusicPlayer from "./src/screens/MusicPlayer";
import MusicList from "./src/screens/MusicList";
import { useState } from "react";

export default function Main() {
  const [changeScreen, setChangeScreen] = useState(false);
  const [play, setPlay] = useState(false);

  const handleScreenChange = () => {
    setPlay(!play);
    setChangeScreen((prevState) => !prevState);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity
            onPress={handleScreenChange}
            style={{
              direction: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5
            }}
          >
            <Image
              source={
                play
                  ? require("./assets/chevron-down.png")
                  : require("./assets/chevron-right.png")
              }
              style={{ width: 30, height: 30 }}
            />
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              {play ? "Music Lists" : "Music Player"}
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("./assets/more-vertical.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      {changeScreen ? <MusicList /> : <MusicPlayer />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#87C38F",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
