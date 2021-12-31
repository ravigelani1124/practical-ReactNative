import React, { useEffect, useState } from 'react';
import { View, Image, Text, Pressable, Linking } from 'react-native';
import axios from 'axios';
import { appString, authDetails } from '../../utils/constant';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from "@react-navigation/core";
import styles from './styles';
import icon from '../../assets';

const UserInfoScreen = () => {

    const navigation = useNavigation();
    const { userId } = useRoute().params;
    const [user, setUserData] = useState();
    console.log(userId)

    const getUserInformation = async () => {

        try {
            const response = await axios({
                method: authDetails.GET,
                baseURL: authDetails.baseURL,
                url: 'user/' + userId,
                headers: { 'app-id': authDetails.appID }
            })
            console.log("Response  :", response.data)
            setUserData(response.data)

        } catch (error) {
            alert(response.data)
        }
    }

    useEffect(() => {
        getUserInformation();
    }, []);

    const openCallScreen = () => {

        let userNumber = user?.phone
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${' + userNumber + '}';
        }
        else {
            number = 'tel:${' + userNumber + '}';
        }
        Linking.openURL(number);
    }

    const openEmailScreen = () => {
        let subjects = "Profile Details of " + user?.firstName + " " + user?.lastName;
        Linking.openURL('mailto:' + user?.email + '?subject=' + subjects + '&body=Description')
    }

    return (
        <View style={styles.uContainer}>
            <Text style={styles.textHeader}>Profile Details</Text>
            <View style={styles.innerContainer}>
                <Image style={styles.userImage} source={{ uri: `${user?.picture}` }} />
                <View>
                    <Text style={styles.textTitle}>{user?.firstName + " " + user?.lastName}</Text>
                    <Text style={styles.text}>{user?.email}</Text>
                    <Text style={styles.text}>{user?.phone}</Text>
                    <Text style={styles.text}>{user?.gender}</Text>
                </View>
            </View>
            <View styles={styles.detailsContainer}>

                <View style={styles.contactContainer}>
                    <Pressable onPress={openCallScreen}>
                        <Image style={styles.contactButton} source={icon.callIcon} />
                    </Pressable>
                    <Pressable onPress={openEmailScreen}>
                        <Image style={styles.contactButton} source={icon.emailIcon} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default UserInfoScreen;
