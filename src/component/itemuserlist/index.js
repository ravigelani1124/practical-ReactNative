import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ItemUserList = ({ item, index }) => {
  return (
    <View style={styles.userContainer}>
      <Image style={styles.imageuser} source={{uri: 'https://reactjs.org/logo-og.png'}}/>
      <View style={styles.uContainer}>
        <Text style={styles.tUserTitle}>{item.name}</Text>
        <Text style={styles.tUserDetail}>{item.email}</Text>
        <Text style={styles.tUserDetail}>{item.mobile}</Text>
        <Text style={styles.tUserDetail}>{item.image}</Text>
      </View>
    </View>
  );
}

export default ItemUserList;
