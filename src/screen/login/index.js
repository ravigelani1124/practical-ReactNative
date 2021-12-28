import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonStrings, placeHolderString, validationString } from '../../utils/constant';
import styles from './style';


const LoginScreen = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkValidationAndGoDashboard = () => {
        if (email.trim() === '') {
            alert(validationString.email_empty)
        } else if (checkEmailValid(email) === false) {
            alert(validationString.email_valid)
        } else if (password.trim() === '') {
            alert(validationString.password_empty)

        } else if (password.trim() === '') {
            alert(validationString.password_empty)
        } else if (password.length < 8 || password.length > 12) {
            alert(validationString.password_wrong)
        }
    }



    return (
        <SafeAreaView style={styles.lcontainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Text>Login</Text>
                    <View>
                        <TextInput
                            style={styles.input}
                            keyboardType={'email-address'}
                            value={email}
                            autoCapitalize="none"
                            returnKeyType="next"
                            placeholder={placeHolderString.EMAIL_ADDRESS}
                            onChangeText={text => {
                                setEmail(text);
                            }}
                        />
                        <TextInput
                            style={styles.input}
                            keyboardType='password'
                            value={email}
                            returnKeyType="done"
                            placeholder={placeHolderString.EMAIL_ADDRESS}
                            onChangeText={text => {
                                setPassword(text);
                            }}
                            secureTextEntry={true}
                        />

                        <Pressable style={styles.btnContainer} onPress={checkValidationAndGoDashboard}>
                            <Text style={styles.titleText}> {ButtonStrings.LOGIN}</Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default LoginScreen;
