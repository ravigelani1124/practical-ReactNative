import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';


const ItemUserList = ({ item, index }) => {
  return (
    <View style={styles.userContainer}>
      <Image style={styles.imageuser} source={{ uri: `${item.picture}` }} />
      <View style={styles.uContainer}>
        <Text style={styles.tUserTitle}>{item.firstName + ' ' + item.lastName}</Text>
      </View>
    </View>
  );
}

export default ItemUserList;
