import React, { useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";

export default function MusicPlayer() {
  const [play, setPlay] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (play) {
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      setIsAnimating(true);
    } else {
      progress.stopAnimation((value) => {
        progress.setValue(value);
      });
      setIsAnimating(false);
    }
    return () => {
      progress.stopAnimation();
    };
  }, [play, progress, isAnimating]);

  const widthInterpolation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"], // From 0% width to 100% width
  });

  const handlePress = () => {
    setPlay(!play); // Toggle play state
  };

  return (
    <View>
      <View style={{ backgroundColor: "#226F54", height: "100%" }}>
        <View style={{ alignItems: "center", margin: 15 }}>
          <Text style={{ color: "#FFF", fontSize: 15 }}>
            PLAYING FROM PLAYLIST
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            Tatak Pinoy
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/dilaw.jpg")}
            style={{
              width: 350,
              height: 350,
              borderRadius: 10,
              marginVertical: 40,
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 30,
            marginBottom: 20,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "#FFF" }}>
              Dilaw
            </Text>
            <Text style={{ fontSize: 15, color: "#FFF" }}>Maki</Text>
          </View>
          <View>
            <Image
              source={require("../../assets/plus-circle.png")}
              style={{ width: 40, height: 40, marginTop: 5}}
            />
          </View>
        </View>

        <View style={styles.progressContainer}>
          <Animated.View
            style={[styles.progressBar, { width: widthInterpolation }]}
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 35,
            marginVertical: 50,
          }}
        >
          <Image
            source={require("../../assets/shuffle.png")}
            style={{ height: 35, width: 35 }}
          />
          <Image
            source={require("../../assets/skip-back.png")}
            style={{ height: 40, width: 40 }}
          />
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={
                play
                  ? require("../../assets/pause-circle.png")
                  : require("../../assets/play-circle.png")
              }
              style={styles.play}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/skip-forward.png")}
            style={{ height: 40, width: 40 }}
          />
          <Image
            source={require("../../assets/repeat.png")}
            style={{ height: 35, width: 35 }}
          />
        </View>
      </View>
    </View>
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
  progressContainer: {
    height: 5,
    backgroundColor: "gray",
    overflow: "hidden",
    width: "85%",
    marginLeft: 30,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FFF",
  },
  play: {
    height: 65,
    width: 65,
  },
});
