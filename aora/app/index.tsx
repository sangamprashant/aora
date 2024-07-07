import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text>Open up App.js to start working on your app!</Text>
      <Link href="/profile">Go to Profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}
