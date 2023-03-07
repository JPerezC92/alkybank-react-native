import { Platform, StatusBar, StyleSheet } from "react-native";

export const Safa = StyleSheet.create({
  Anda: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
