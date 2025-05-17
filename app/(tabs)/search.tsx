import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constant/images'
import { useRoute } from '@react-navigation/native'
import { useFetch } from '@/service/useFetch'
import { fetchMovies } from '@/service/api'
import MovieCard from '@/components/MovieCard'
import { icons } from '@/constant/icons'
import SearchBar from '@/components/SearchBar'
import { updateSearchCount } from '@/service/appwrite';

const search = () => {
  const [searchQuery, setQuery] = useState("");

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(()=> fetchMovies({
    query: searchQuery
  }), false)

  useEffect(()=>{
    

    const timeoutId = setTimeout(async()=>{
      if (searchQuery.trim()){
        await loadMovies();

        if(movies?.length>0 && movies?.[0])
          await updateSearchCount(searchQuery, movies[0]);
      } else {
        reset()
      }
    }, 500)
    
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className='flex-1'>
      <Image source={images.bg} className="flex-1 absolute w-full"/>

      <FlatList
        data={movies}
        renderItem={({item})=> (<MovieCard {...item}/>)}
        keyExtractor={(item)=> item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent:'center',
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{ paddingBottom: 100}}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className='w-12 h-10' />
            </View>

            <View className='border border-1 rounded my-5'>
              <SearchBar 
                // onPress={()=>{}}
                placeholder='Search movies...'
                value={searchQuery}
                onChangeText={(text: string)=>setQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator size={"large"} className='my-3'/>
            )}
            {error && (
              <Text className='text-red-500 px-5 my-3'>
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length >0 &&(
              <Text className='text-xl text-white font-bold'>
                Search Results for {' '}
                <Text className='' style={{color:"#71b7da"}}>{searchQuery}</Text>
              </Text>
            ) }
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View>
              <Text className='text-center text-secondary'>
                {searchQuery.trim()? 'No movies found': 'Search for a movie'}
              </Text>
            </View>
          ) : null
        } 
      />
    </View>
  )
}

export default search