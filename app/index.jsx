import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { hp, wp } from "../helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const Welcomescreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pixels</Text>
          <Text style={styles.punchline}>Every Pixel Tells a Story</Text>
        </View>
        <Pressable
          onPress={() => router.push("home")}
          style={styles.startButtom}
        >
          <Text style={styles.startText}>Start Explore</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    color: "black",
    fontWeight: "bold",
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: "medium",
  },
  startButtom: {
    marginBottom: 50,
    padding: 15,
    backgroundColor: "black",
    paddingHorizontal: 90,
    borderRadius: 50,
    borderColor: "black",

    borderCurve: "continuous",
  },
  startText: {
    color: "white",
    fontSize: hp(3),
    fontWeight: "medium",
    letterSpacing: 1,
    alignSelf: "center",
  },
});
export default Welcomescreen;
