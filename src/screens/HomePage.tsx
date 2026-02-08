import { Image, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

const HomePage = () => {
  return (
    <View style={{
      flex: 1,
    }}>
      <Header />
    </View>
  )
}

const Header = () => {
  return (
    <View style={{
      flexDirection: 'row',
      padding: '5%',
      alignItems: 'center',
    }}>

      <Image source={require('../../assets/img/pizza1.png')} style={{ width: 40, height: 40 }} />
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ fontSize: 30, fontFamily: 'Lobster-Regular' }}>Pizza Mania</Text>
        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'gray', marginTop: -8 }}>Best Pizza In Anywhere</Text>
      </View>

      <View style={{
        width: 40,
        height: 40,
      }}>
        <Icon size={35} type='ionicon' name='notifications-outline'/>
      </View>

    </View>
  )
}

export default HomePage




