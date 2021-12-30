import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import ItemUserList from '../../component/itemuserlist';
import { authDetails } from '../../utils/constant';




const DashboardScreen = () => {

  const [userList, setUserList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


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
      setIsLoading(false)
      setCurrentPage(currentPage + 1)
      //userList: [...state.userList, action.payload]
      setUserList[[...userList, response.data?.data]]
     // setUserList(response.data?.data)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      alert(JSON.stringify(error.message))
    }
  }
  
  useEffect(() => {
    getUserData();
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.ulContainer}>

      <FlatList
        data={userList}
        bounces={false}
        overScrollMode='never'
        showsVerticalScrollIndicator={false}
        renderItem={ItemUserList}
      />
    </SafeAreaView>
  );
}

export default DashboardScreen;
