import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className='w-[30%]'>
        <Image
          source={{
            uri: poster_path?
            `https://image.tmdb.org/t/p/w500${poster_path}`:
            `https://placehold.co/600x400/1a1a1a/ffffff.png`
          }}
          className='w-full h-52 rounded-lg'
          resizeMode='cover'
        />
        <Text className='text-white font-bold mb-1' numberOfLines={1}>{title}</Text>
        <View className='flex-row items-center justify-start gap-x-1'>
          <FontAwesome name="star" size={15} color="yellow"/>
          <Text className='text-white font-bold uppercase'>{Math.round(vote_average/2*10)/10}</Text>
        </View>
        <View className='flex-row items-center justify-between'>
          <Text className='text-xs text-secondary font-medium mt-1'>
            {release_date?.split('-')[0]}
          </Text>
          {/* <Text className='text-secondary text-xs'>
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard