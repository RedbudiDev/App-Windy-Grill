import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';
import { fetchData } from '../../../services/FetchClient';

import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import SectionTitle from '../../../components/SectionTitle';
import Toast from 'react-native-toast-message';

import { globalStyles } from '../../../helper/globalStyles';
import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const __ = usePolyglot();

    // states for screen
    const [email, setEmail] = React.useState("");
    const [newPassword, setNewPassword] = React.useState('');
    const [showPasswordValidationError, setShowPasswordValidationError] = React.useState(false);

    /**
     * @param {string} password 
     * @returns {boolean}
     * function for checking if format of password is ok
     */
    function _validatePassword(password) {
        // Provjera da li ima barem jedan specijalni karakter
        const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
        if (!specialCharacterRegex.test(password)) {
            return false;
        }

        // Provjera minimalne dužine
        if (password.length < 6) {
            return false;
        }

        // Provjera da li ima barem jedno slovo
        const letterRegex = /[a-zA-Z]/;
        if (!letterRegex.test(password)) {
            return false;
        }
        // Provjera da li ima barem jedno veliko slovo
        const capitalLetterRegex = /[A-Z]/;
        if (!capitalLetterRegex.test(password)) {
            return false;
        }

        return true;
    }


    /** function for validating fields */
    function _validateData() {
        setShowPasswordValidationError(false);
        if (!email.trim()) {
            return {
                success: false,
                message: __('Unesite email')
            }
        }
        if (!newPassword.trim()) {
            return {
                success: false,
                message: __('Unesite šifru')
            }
        }
        if (!_validatePassword(newPassword)) {
            setShowPasswordValidationError(true);
            return {
                success: false,
                message: __("Nije dobar format šifre")
            }
        }
        return {
            success: true,
            message: 'Aloo'
        }
    }

    /** function for reset password */
    async function _resetPassword() {
        try {
            const validateData = _validateData();
            const { message, success } = validateData;
            if (success) {
                const url = 'all/V1/customers/resetPassword';
                const methode = "POST";
                const data = {
                    newPassword: newPassword,
                    email: email,
                    resetToken: ''
                };
                const response = await fetchData(url, methode, data, null);
                // TODO: api call for forgott password
            } else {
                Toast.show({
                    text1: message,
                    type: 'error',
                    position: 'top',
                    visibilityTime: 1500
                });
            }
        } catch (error) {
            console.log("Error:", error);
            Toast.show({
                text1: "Došlo je do greške",
                type: 'error',
                position: 'top',
                visibilityTime: 1500
            });
        }
    }

    /** 
     * function that returns JSX component 
     * based on passsword validation
     */
    const _renderPasswordValidationError = () => {
        if(showPasswordValidationError) {
            return <Text style = {styles.passwordErrorText}>{__("Šifra mora imati minimum 6 karaktera, jedan specijalan karakter i jedno veliko slovo")}</Text>
        } else {
            return null;
        }
    }

    // main return
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? null : "padding"}>
                <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    {/** header */}
                    <Header
                        showLeftIcon
                        onLeftIconPress={() => { navigation.goBack() }}
                        showLocationText={false}
                    />

                    {/** SECTION TITLE: */}
                    <SectionTitle
                        text={__("Zaboravljena lozinka").toUpperCase()}
                    />
                    {/** content */}
                    <View style={styles.mainContentContainer}>
                        <Text style={styles.text}>
                            {
                                __('Izgubili ste lozinku? Unesite svoje korisničko ime ili adresu e-pošte. Dobićete vezu za kreiranje nove lozinke putem e-pošte.')
                            }
                        </Text>
                        {/** fields */}
                        <Input
                            placeholder={__("E-mail adresa ili korisničko ime")}
                            multiline={false}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType={"email-address"}
                            customInputStyle={{ backgroundColor: appColors.white }}
                        />
                        <Input
                            placeholder={__("Nova šifra")}
                            multiline={false}
                            value={newPassword}
                            onChangeText={setNewPassword}
                            keyboardType={"email-address"}
                            customInputStyle={{ backgroundColor: appColors.white }}
                            secured={true}
                        />
                        {_renderPasswordValidationError()}
                        {/** button */}
                        <Button
                            title={__("Resetuj šifru").toUpperCase()}
                            onPress={() => { _resetPassword() }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.baseColor
    },
    mainContentContainer: {
        backgroundColor: appColors.white,
        paddingVertical: 25,
        borderRadius: 5,
        marginBottom: 20,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    text: {
        marginHorizontal: 20,
        color: appColors.black,
        textAlign: 'center',
        ...globalStyles.textFontRegular
    },
    passwordErrorText: {
        fontSize: 15,
        color: appColors.red,
        ...globalStyles.textFontRegular
    }
});

export default ForgotPasswordScreen;