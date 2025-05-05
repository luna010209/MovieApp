import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

interface Props{
  placeholder: string;
  onPress?: ()=> void;
  value: string;
  onChangeText?: (text: string)=>void;
}

const SearchBar = ({placeholder, onPress, value, onChangeText}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <FontAwesome name={"search"} size={20} color="#3F649B"/>
      <TextInput 
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"gray"}
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar