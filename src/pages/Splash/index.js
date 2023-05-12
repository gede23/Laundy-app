import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React, {useEffect} from 'react'
import { SplashBackground,Logo } from '../../assets';

const Splash = ({navigation}) => {

    useEffect(() =>{
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 3000)
    }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.backgroud}>
      <Image source={Logo} style={styles.logo}/>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
    backgroud:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
      width:222,
      height:105
    }
})