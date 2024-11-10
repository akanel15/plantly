import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";

export default function Profile() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHadOnboarded);

  return (
    <View style={styles.container}>
      <Button title="Back to onboarding" onPress={toggleHasOnboarded}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
