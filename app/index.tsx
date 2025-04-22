import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-accent font-bold">Welcome to Expo</Text>
      <Link href={`/OnBoarding`} className="text-5xl text-primary font-bold">Onboarding</Link>
    </View>
  );
}
