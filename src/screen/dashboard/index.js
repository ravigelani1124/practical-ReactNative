import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import ItemUserList from '../../component/itemuserlist';
import { authDetails, Routes } from '../../utils/constant';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/core";

const DashboardScreen = () => {

  const navigation = useNavigation()
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  let tempList = []

  const handleNavigaiton = (item) => {
    navigation.navigate(Routes.UserInfo, { userId: item.id })
  }

  const renderDashboardItem = (props) => {
    return (<ItemUserList {...props} onPress={handleNavigaiton} />)
  }

  const getUserData = async () => {

    setIsLoading(true)
    try {
      const response = await axios({
        method: authDetails.GET,
        url: 'user',
        baseURL: authDetails.baseURL,
        params: {
          page: currentPage,
          limit: 10
        },
        headers: { 'app-id': authDetails.appID }

      })
      console.log("RESPONSE DATA" + JSON.stringify(response.data.data))
      let responseList = response.data.data
      let dummylist = userList;
      dummylist.push.apply(dummylist, responseList)
      setUserList(dummylist)
      setIsLoading(false)

    } catch (error) {
      if (currentPage != 1) {
        setCurrentPage(currentPage--)
      }
      setIsLoading(false)
      console.log(error)
      alert(JSON.stringify(error.message))
    }
  }

  useEffect(() => {
    getUserData();
  }, [currentPage]);

  const onEndReachScroll = () => {
    if (!isLoading) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (

    <SafeAreaView style={styles.ulContainer}>
      <FlatList
        data={userList}
        bounces={false}
        overScrollMode='never'
        showsVerticalScrollIndicator={false}
        renderItem={renderDashboardItem}
        onEndReachedThreshold={.5}
        keyExtractor={item => item.id}
        onEndReached={onEndReachScroll}
      />
      <ActivityIndicator size='large' animating={isLoading} />
    </SafeAreaView>
  );
}

export default DashboardScreen;
