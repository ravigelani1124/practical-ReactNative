import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonStrings, placeHolderString, Routes, validationString } from '../../utils/constant';
import styles from './style';
import * as userDetailsList from '../../utils/userdetails.json';
import { checkEmailValid } from '../../utils/constant';
import { useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from 'react-redux';
import { userLoginAction } from '../../redux/action/userlogin'

const userList = userDetailsList.data

const LoginScreen = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();

    const userSelector = useSelector((state) => state.userLoginReducer?.userLogin)

    useEffect(() => {
        console.log(userSelector)
    }, []);


    const checkValidation = () => {
        if (email.trim() == '') {
            alert(validationString.email_empty)
        } else if (checkEmailValid(email) == false) {
            alert(validationString.email_valid)
        } else if (password.trim() == '') {
            alert(validationString.password_empty)
        } else if (password.trim() == '') {
            alert(validationString.password_valid)
        } else if (password.length < 6 || password.length > 12) {
            alert(validationString.password_wrong)
        } else {
            const result = userList.filter(element => element.email.toLocaleLowerCase().includes(email))
            if (result.length > 0) {
                if (result[0]?.password == password) {
                    setUser(result[0])
                    navigation.navigate(Routes.Dashboard)
                } else {
                    alert(validationString.password_valid)
                }
            } else {
                alert(validationString.email_not_record)
            }
        }
    }

    //useEffect(() => {

    //     if (user)
    //         dispatch(userLoginAction({
    //             user
    //         }))
    //     navigation.navigate(Routes.Dashboard)
    // }, [user]);

    // const gotoDashboard = (element) => {
    //     console.log(element)

    //     dispatch(userLoginAction({
    //         element
    //     }))
    //     navigation.navigate(Routes.Dashboard)
    // }

    return (
        <>
            <SafeAreaView style={styles.lcontainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Text style={styles.titleText}>Login</Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            keyboardType={'email-address'}
                            value={email}
                            autoCapitalize="none"
                            returnKeyType="next"
                            placeholder={placeHolderString.EMAIL_ADDRESS}
                            onChangeText={text => {
                                setEmail(text.trim());
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            value={password}
                            returnKeyType="done"
                            placeholder={placeHolderString.PASSWORD}
                            onChangeText={text => {
                                setPassword(text);
                            }}
                            secureTextEntry
                        />

                        <Pressable style={styles.btnContainer} onPress={checkValidation}>
                            <Text style={styles.btnText}> {ButtonStrings.LOGIN}</Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
}

export default LoginScreen;
