import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';

import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';
import { fetchData } from '../../../services/FetchClient';

import { updateToken } from '../../../redux/actions/AuthActions';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import SectionTitle from '../../../components/SectionTitle';
import Toast from 'react-native-toast-message';
import Loading from '../../../components/Loading';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

const LoginScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const __ = usePolyglot();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    /**
     * function for validation 
     * 
     * returning object { success, message }
     */
    function _validateData() {
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
                const url = "/integration/customer/token";
                const methode = "POST";
                const data = {
                    username: email,
                    password: password
                }
                const response = await fetchData(url, methode, data, null);
                const token = response?.data;
                dispatch(updateToken(token));
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

    // main return
    if (loading) {
        return <Loading />
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? null : "padding"}>
                <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                    {/** SECTION TITLE: */}
                    <SectionTitle
                        text={__("Uloguj se").toUpperCase()}
                        customContainerStyle={{ alignSelf: 'center', marginTop: 40 }}
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

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { navigation.navigate(screens.forgotPasswordScreen) }}
                        style={styles.forgotContainer}
                    >
                        <Text style={styles.forgotText}>{__("Zaboravljena lozinka")}</Text>
                    </TouchableOpacity>

                    {/** register butotn */}
                    <View style={styles.registerTextContainer}>
                        <Text style={[styles.forgotText, { alignSelf: 'center' }]}>
                            {__("Nemate nalog?")}
                            <Text
                                style={{ color: appColors.black }}
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
        flex: 1
    },
    forgotContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginHorizontal: 20
    },
    forgotText: {
        color: appColors.textGray,
        fontFamily: 'FlameRegular'
    },
    registerTextContainer: {
        marginHorizontal: 20,
        marginTop: 10
    }
})

export default LoginScreen;