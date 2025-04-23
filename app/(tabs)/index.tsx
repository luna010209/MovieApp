import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constant/images";
import { icons } from "@/constant/icons";


export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Image source={images.bg} className="absolute h-full w-full"/>
      <ScrollView className="flex-1 pt-20"
      showsHorizontalScrollIndicator={true} 
      >
        <Image source={icons.logo} className="w-20 h-20"/>
      </ScrollView>
    </View>
  );
}
