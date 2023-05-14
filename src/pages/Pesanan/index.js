import {Dimensions,StyleSheet, Text, View,ImageBackground} from 'react-native';
import {Card} from '../../components';
import Gap from '../../components/atoms/Gap';
import React, {useState, useEffect} from 'react';
import { Imageheader } from '../../assets'

const Pesanan = ({navigation}) => {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleTransaction = () => {
    const data = {
      description: description,
      type: type,
    };

    console.log(data);
  };
  
  return (
    

    <View style={styles.page}>
      <ImageBackground source = {Imageheader} style={styles.header}>
      </ImageBackground>
      <Gap height={24} />

      <View style={styles.container}>
      </View>
      <View style={styles.page}>
        <View style={styles.historyWrapper}>
          <Text style={styles.transactionTitle}>Transaksi Pesanan</Text>
          <Card
            date="17 Mei 2023"
            description="Pesanan NO. 1256743"
            amount="-35.000"
          />

          <Card
            date="10 Mei 2023"
            description="Pesanan NO. 1256730"
            amount="-50.000"
          />

          <Card 
            date="6 Mei 2023"
            description="Pesanan NO. 1256715"
            amount="-25.000" />
          <Card 
            date="1 Mei 2023"
            description="Pesanan NO. 1256701"
            amount="-45.000" />
        </View>
      </View>
    </View>
  );
};

export default Pesanan;

const windowWidth = Dimensions.get ('window').width;
const windowHeight = Dimensions.get ('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FAFAFC',
  },
  header : {
    width : windowWidth,
    height : windowHeight*0.25
  },
  container: {

    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,

  },
  historyWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  transactionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#020202',
    paddingTop: 16,
    paddingBottom: 10,
  },
});