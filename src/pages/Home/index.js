import { Dimensions, StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import { Imageheader } from '../../assets'
import { BottomIcon, Saldo } from '../../components'


const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source = {Imageheader} style={styles.header}>
      </ImageBackground>
      <Saldo/>
      <View style={styles.Layanan}>
        <Text style={styles.Label}>Layanan Kami</Text>
        <View style={styles.IconLayanan}>
        <BottomIcon title="Kiloan" type="Layanan"/>
        <BottomIcon title="Satuan" type="Layanan"/>
        <BottomIcon title="VIP" type="Layanan"/>
        
        </View>
        <View style={styles.IconLayanan}>
        <BottomIcon title="Karpet" type="Layanan"/>
        <BottomIcon title="Setrika Saja" type="Layanan"/>
        <BottomIcon title="Ekspress" type="Layanan"/>
        </View>

      </View>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get ('window').width;
const windowHeight = Dimensions.get ('window').height;

const styles = StyleSheet.create({
  page :{
    flex: 1
  },
  header : {
    width : windowWidth,
    height : windowHeight*0.40
  },
  Layanan: {
    paddingHorizontal: 30,
    paddingTop: 15
  },
  Label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  IconLayanan:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 10
  }

})