import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { images } from "@/constant/images";
import { icons } from "@/constant/icons";
import { useRoute } from "@react-navigation/native";
import { useFetch } from "@/service/useFetch"
import { fetchMovies } from "@/service/api";
import MovieCard from "@/components/MovieCard";


export default function Index() {
  const router = useRoute();

  const {
    data:movies, 
    loading: moviesLoading,
    error: moviesError
  } = useFetch(()=> fetchMovies({
    query: 'iron'
  }));

  return (
    <View className="flex-1">
      <ScrollView className="flex-1">
        <Image source={images.bg} className="absolute h-full w-full"/>
        <>
          <View className="items-center mt-20"><Image source={icons.logo} className="w-20 h-20 items-center"/></View>
          <Text className="text-white text-xl italic text-center text-yellow-200">WELCOME TO LUNA'S MOVIE UNIVERSE</Text>
          {moviesLoading ? (
            <ActivityIndicator
              size="large"
              color=""
              className="mt-10 self-center"
            />
          ):moviesError ? (
            <Text className="text-white">Error: {moviesError?.message}</Text>
          ) : (
            <View className="flex-1 mt-5 w-full px-3">
                <>
                  <Text className="text-2xl text-white font-bold mt-5 mb-3">
                    Lastest movies
                  </Text>

                  <FlatList
                    data={movies}
                    renderItem={({item}) => (
                      <MovieCard
                        {...item}
                      />
                    )}
                    keyExtractor={(item)=> item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{
                      justifyContent:"flex-start",
                      gap:20,
                      paddingRight:5,

                    }}
                    className="mt-2 pb-32"
                    scrollEnabled={false}
                  />
                </>
            </View>
          )}
        </>
      </ScrollView>
    </View>
  );
}
