import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image } from 'react-native';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchData } from '../../../services/FetchClient';
import usePolyglot from '../../../hooks/usePolyglot';

import { updateToken } from '../../../redux/actions/AuthActions';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import SectionTitle from '../../../components/SectionTitle';
import Toast from 'react-native-toast-message';
import Loading from '../../../components/Loading';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';
import { appIcons } from '../../../helper/icons';
import { globalStyles } from '../../../helper/globalStyles';

const LoginScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const __ = usePolyglot();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
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

    /**
     * function for validation 
     * 
     * returning object { success, message }
     */
    function _validateData() {
        setShowPasswordValidationError(false);
        if (!email.trim()) {
            return {
                success: false,
                message: __("Unesite email")
            }
        }
        if (!password.trim()) {
            return {
                success: false,
                message: __("Unesite šifru")
            }
        }
        if (!_validatePassword(password)) {
            setShowPasswordValidationError(true);
            return {
                success: false,
                message: __("Nije dobar format šifre")
            }
        }
        return {
            success: true,
            message: "Prosli smo validaciju"
        }
    }

    /** function for login */
    async function _doLogin() {
        try {
            const validationData = _validateData();
            const { message, success } = validationData;
            if (success) {
                const url = "all/V1/integration/customer/token";
                const methode = "POST";
                const data = {
                    username: email,
                    password: password
                }
                const response = await fetchData(url, methode, data, null);
                const token = response?.data;
                dispatch(updateToken(token));
                console.log("Token:", token);
                setLoading(false);
                Toast.show({
                    text1: __("Uspešno ste se ulogovali"),
                    type: 'success',
                    position: 'top',
                    visibilityTime: 1500
                });
            } else {
                setLoading(false);
                Toast.show({
                    text1: message,
                    type: 'error',
                    position: 'top',
                    visibilityTime: 1500
                });
            }
        } catch (error) {
            const status = error?.message?.response?.status;
            setLoading(false);
            if (status !== undefined) {
                switch (status) {
                    case 401:
                        Toast.show({
                            text1: error?.message?.response?.data?.message,
                            type: 'error',
                            position: 'top',
                            visibilityTime: 1500
                        });
                        break;
                    case 400:
                        Toast.show({
                            text1: __("Došlo je do greške"),
                            type: 'error',
                            position: 'top',
                            visibilityTime: 1500
                        });
                        break;
                    default:
                        Toast.show({
                            text1: __("Došlo je do greške"),
                            type: 'error',
                            position: 'top',
                            visibilityTime: 1500
                        });
                        break;
                }
            } else {
                Toast.show({
                    text1: __("Došlo je do greške"),
                    type: 'error',
                    position: 'top',
                    visibilityTime: 1500
                });
            }
        }
    }

    /** 
     * function that returns JSX component 
     * based on passsword validation
     */
    const _renderPasswordValidationError = () => {
        if(showPasswordValidationError) {
            return <Text style = {styles.passwordErrorText}>{__("Šifra mora imati minimum 6 karaktera, jedan specijalan karakter i jedno veliko slovo.")}</Text>
        } else {
            return null;
        }
    }
    // main return
    if (loading) {
        return <Loading />
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? null : "padding"}>
                <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    {/** LOGO IMAGE */}
                    <Image
                        style={styles.logoImage}
                        source={appIcons.logo}
                    />
                    {/** SECTION TITLE: */}
                    <SectionTitle
                        text={__("Uloguj se").toUpperCase()}
                        customContainerStyle={{ alignSelf: 'center', marginTop: 10 }}
                    />

                    {/** fields */}
                    <Input
                        placeholder={__("E-mail")}
                        multiline={false}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType={"email-address"}
                        customInputStyle={{ backgroundColor: appColors.white }}
                    />
                    <Input
                        placeholder={__("Šifra")}
                        multiline={false}
                        value={password}
                        onChangeText={setPassword}
                        secured={true}
                        customInputStyle={{ backgroundColor: appColors.white }}
                    />
                    {_renderPasswordValidationError()}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { navigation.navigate(screens.forgotPasswordScreen) }}
                        style={styles.forgotContainer}
                    >
                        <Text style={{ ...styles.forgotText, ...globalStyles.textFontSemiBold, color: appColors.white }}>{__("Zaboravljena lozinka") + "?"}</Text>
                    </TouchableOpacity>

                    {/** register butotn */}
                    <View style={styles.registerTextContainer}>
                        <Text style={[styles.forgotText, { alignSelf: 'center' }]}>
                            {__("Nemate nalog?")}
                            <Text
                                style={{
                                    color: appColors.white,
                                    ...globalStyles.textFontSemiBold
                                }}
                                onPress={() => { navigation.navigate(screens.registerScreen) }}
                            >
                                {" " + __("Registruj se") + "."}
                            </Text>
                        </Text>
                    </View>

                    {/** button */}
                    <Button
                        title={__("Uloguj se").toUpperCase()}
                        onPress={() => {
                            setLoading(true);
                            _doLogin();
                        }}
                    />
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
    forgotContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginHorizontal: 20,
        marginTop: 10
    },
    forgotText: {
        color: appColors.textGray,
        ...globalStyles.textFontRegular
    },
    registerTextContainer: {
        marginHorizontal: 20,
        marginTop: 10
    },
    logoImage: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    passwordErrorText: {
        marginHorizontal: 25,
        fontSize: 15,
        color: appColors.red,
        ...globalStyles.textFontRegular
    }
})

export default LoginScreen;