import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import ItemUserList from '../../component/itemuserlist';
import { authDetails, Routes } from '../../utils/constant';
import LoadMorePagination from '../../component/loadmore';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

const DashboardScreen = () => {

  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  let tempList = []

  const handleNavigaiton = (item) => {
    console.log("test")
    navigation.navigate(Routes.UserInfo)
  }

  const renderDashboardItem = (props) => {
    return (<ItemUserList {...props} onPress={handleNavigaiton} />)
  }

  const getUserData = async () => {

    setIsLoading(true)
    try {
      const response = await axios({
        method: authDetails.GET,
        baseURL: authDetails.baseURL,
        params: {
          page: currentPage,
          limit: 10
        },
        headers: { 'app-id': authDetails.appID }
      })
      console.log("Response  :", response.data)

      let arr = response.data?.data
      let iterator = arr.values();

      for (let elements of userList.values()) {
        tempList.push(elements)
      }
      for (let elements of iterator) {
        tempList.push(elements)
      }
      setUserList(tempList)
      console.log(tempList.length)
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
        onEndReached={onEndReachScroll}
      //ListFooterComponent={LoadMorePagination}
      />
      <ActivityIndicator size='large' animating={isLoading} />
    </SafeAreaView>
  );
}

export default DashboardScreen;
