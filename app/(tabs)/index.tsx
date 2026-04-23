import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/header.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello there!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Who am I?</ThemedText>
        <ThemedText>
          My name is Mainasara Olulanke. A proud Nigerian developer and
          innovator.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">About me</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Action"
              icon="cube"
              onPress={() => alert("Action pressed")}
            />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert("Share pressed")}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert("Delete pressed")}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          I am a Frontend Engineer, building UIs and interactive interfaces and
          applications.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">What I do?</ThemedText>
        <ThemedText>
          I build creative solutions for the web that are performant and
          scalable, and having fun while doing it.
        </ThemedText>
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
