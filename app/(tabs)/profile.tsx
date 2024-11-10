import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { PlantlyButton } from "@/components/PlantlyButton";

export default function Profile() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHadOnboarded);

  return (
    <View style={styles.container}>
      <PlantlyButton
        title="Back to onboarding"
        onPress={toggleHasOnboarded}
      ></PlantlyButton>
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
