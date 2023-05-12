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
          <Text style={styles.transactionTitle}>Last 3 Transactions</Text>
          <Card
            date="17 April 2023"
            description="Water, Food"
            amount="-300.000"
          />

          <Card
            date="18 April 2023"
            description="Office supplies"
            amount="-300.000"
          />

          <Card date="19 April 2023" description="Top Up" amount="+300.000" />
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
    height : windowHeight*0.40
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 20,
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