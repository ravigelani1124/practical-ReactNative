import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';


const ItemUserList = ({ item, index,onPress }) => {

  const handleOnPress = () => {
    onPress(item)
  }

  return (
    <Pressable style={styles.userContainer} onPress={handleOnPress}>
      <Image style={styles.imageuser} source={{ uri: `${item.picture}` }} />
      <View style={styles.uContainer}>
        <Text style={styles.tUserTitle}>{item.firstName + ' ' + item.lastName}</Text>
      </View>
    </Pressable>
  );
}

export default ItemUserList;
