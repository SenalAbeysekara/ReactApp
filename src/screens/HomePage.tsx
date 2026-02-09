import { Image, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';

const HomePage = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <Header />
      <CarouselSection />
      <HomeButtons />

      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        margin: '5%',
      }}>

        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Bold', textAlign: 'center', color: '#999', marginBottom: '5%' }}>
          Please Visit <Text style={{ fontFamily: 'Poppins-Bold', color: 'black' }}>PizzaMania.lk</Text> And Give Us A Chance To Serve You The Best Pizza In Anywhere, We Promise You That You Will Love It. 
        </Text>
        <Text style={{ fontFamily: 'Poppins-Bold', color: 'black', textAlign: 'center' }}> © 2026 Pizza Mania </Text>
      </View>

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
        <Icon size={35} type='ionicon' name='notifications-outline' />
      </View>

    </View>
  )
}

const CarouselSection = () => {
  const { width } = useWindowDimensions();

  const imgs = [
    require('../../assets/img/s1.png'),
    require('../../assets/img/s2.png'),
    require('../../assets/img/s3.png'),
  ];

  return (
    <Carousel
      loop
      width={width}
      height={width / 1.6}
      autoPlay
      data={imgs}
      scrollAnimationDuration={2000}
      renderItem={({ item }) => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", margin: 10 }}>
          <Image
            source={item}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 16,
            }}
            resizeMode="cover"
          />
        </View>
      )}
    />
  );
}

type props = {
  img: any,
  text: string
}

const MenueBuutton = (p: props) => {

  const { width } = useWindowDimensions();

  return (
    <View style={{
      width: width / 3.8,
      height: width / 3.8,
      backgroundColor: p.text ? '#F4F4F4' : '#ffffff00',
      padding: '2%',
      borderRadius: 10,
      marginTop: '2%',
    }}>
      {
        (p.text) && <Image source={p.img} style={{ width: '55%', height: '55%', alignSelf: 'center', marginTop: 5, }} />
      }

      <Text style={{ fontSize: 11, fontFamily: 'Poppins-Medium', textAlign: 'center', marginTop: 5 }}>{p.text}</Text>
    </View>
  )
}

const HomeButtons = () => {
  return (
    <View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
        <MenueBuutton img={require('../../assets/img/pizza.png')} text={'Newly Added'} />
        <MenueBuutton img={require('../../assets/img/4.png')} text={'Pizza Menue'} />
        < MenueBuutton img={require('../../assets/img/2.png')} text={'Favourite'} />
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: '3%',
      }}>
        <MenueBuutton img={require('../../assets/img/1.png')} text={'Foods & Beverages'} />
        <MenueBuutton img={require('../../assets/img/3.png')} text={'Settings'} />
        <MenueBuutton img={require('../../assets/img/3.png')} text={''} />
      </View>
    </View>
  )
}

export default HomePage




