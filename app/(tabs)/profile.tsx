import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/profile.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Mainasara Olulanke 🧑🏾‍🚀</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Frontend Engineer by day, Captain Space Rock-star by night
        </ThemedText>
        <ThemedText>
          From creating exquisite user interfaces, to crafting beautiful
          frontends, I bring ideas to life with clean code and great design.✨
        </ThemedText>
        <ThemedText>
          Building the future of the web & creating elegant solutions to complex
          problems, one line of code at a time, using modern technologies.🖥
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Get in touch</ThemedText>
        <ThemedText>mainasara.o.olulanke@gmail.com</ThemedText>
        <ThemedText>08181120601</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
