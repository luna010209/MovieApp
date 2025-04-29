import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { images } from '@/constant/images'
import { useRoute } from '@react-navigation/native'
import { useFetch } from '@/service/useFetch'
import { fetchMovies } from '@/service/api'
import MovieCard from '@/components/MovieCard'

const search = () => {
  const router = useRoute();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(()=> fetchMovies({
    query: ""
  }))
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
      />
    </View>
  )
}

export default search