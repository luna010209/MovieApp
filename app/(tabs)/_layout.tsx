import { ImageBackground } from 'react-native'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabIcon = ({name, focused}:any)=>{
  if (focused){
    return (
      <>
        <ImageBackground>
          <FontAwesome name={name} size={30} color="#3F649B"/>
        </ImageBackground>
      </>
    )
  }
  return (
    <>
      <ImageBackground>
        <FontAwesome name={name} size={20} color="gray"/>
      </ImageBackground>
    </>
  )
}
const _layout = () => {
  return (
    <Tabs
      // screenOptions={{
      //   tabBarStyle:{
      //     backgroundColor:"#041A2C"
      //   }
      // }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <TabIcon name="home" focused={focused}/>
          )
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <TabIcon name="search" focused={focused}/>
          )
        }}
      />
      
      <Tabs.Screen
        name='saved'
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <TabIcon name="heart" focused={focused}/>
          )
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({focused})=>(
            <TabIcon name="user" focused={focused}/>
          )
        }}
      />
      
    </Tabs>
  )
}

export default _layout