import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchData } from '../../../services/FetchClient';
import usePolyglot from '../../../hooks/usePolyglot';

import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import Toast from 'react-native-toast-message';

import { appColors } from '../../../helper/colors';

const RegisterScreen = () => {

    const navigation = useNavigation();
    const __ = usePolyglot();

    const [username, setUsername] = React.useState("");
    const [first_name, setFirstName] = React.useState("");
    const [last_name, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddreess] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    /** 
     * function for validating data
     * 
     * checking all state variables if thay exists 
     * return { success, message } obj 
     */
    function _validateData() {
        if (!username.trim()) {
            return {
                success: false,
                message: __('Unesite Korisničko ime')
            }
        }
        if (!first_name.trim()) {
            return {
                success: false,
                message: __('Unesite Ime')
            }
        }
        if (!last_name.trim()) {
            return {
                success: false,
                message: __('Unesite Prezime')
            }
        }
        if (!email.trim()) {
            return {
                success: false,
                message: __('Unesite email')
            }
        }
        if (!password.trim()) {
            return {
                success: false,
                message: __('Unesite šifru')
            }
        }
        return {
            success: true,
            message: 'Prosli validaciju'
        }
    }

    /** function for registration */
    async function _doRegister() {
        try {
            const validationData = _validateData();
            const { success, message } = validationData;
            if (success) {
                const url = '/customers';
                const data = {
                    customer: {
                        firstname: first_name,
                        lastname: last_name,
                        addresses: [],
                        email: email
                    },
                    password: password
                }
                const methode = "POST";
                const response = await fetchData(url, methode, data, undefined);
                setLoading(false);
                Toast.show({
                    text1: __("Uspešno ste se registrovali"),
                    type: 'success',
                    position: 'top',
                    visibilityTime: 1500
                });
                navigation.goBack();
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
            // TODO: Handle messages + errors
            const status = error?.message?.response?.status;
            setLoading(false);
            if (status !== undefined) {
                switch (status) {
                    case 400:
                        Toast.show({
                            text1: error.message.response?.data?.message,
                            type: 'error',
                            position: 'top',
                            visibilityTime: 1500
                        });
                        break;
                    case 500:
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
                    <Header
                        showLeftIcon
                        onLeftIconPress={() => { navigation.goBack() }}
                    />
                    {/** SECTION TITLE: */}
                    <SectionTitle
                        text={__("Registruj se").toUpperCase()}
                    />
                    <View style={styles.mainContentContainer}>
                        <Input
                            placeholder={__("Korisničko ime")}
                            multiline={false}
                            value={username}
                            onChangeText={setUsername}
                            customInputStyle={{ backgroundColor: appColors.white }}
                        />
                        <Input
                            placeholder={__("Ime")}
                            multiline={false}
                            value={first_name}
                            onChangeText={setFirstName}
                            customInputStyle={{ backgroundColor: appColors.white }}
                        />
                        <Input
                            placeholder={__("Prezime")}
                            multiline={false}
                            value={last_name}
                            onChangeText={setLastName}
                            customInputStyle={{ backgroundColor: appColors.white }}
                        />
                        <Input
                            placeholder={__("Adresa")}
                            multiline={false}
                            value={address}
                            onChangeText={setAddreess}
                            customInputStyle={{ backgroundColor: appColors.white }}
                        />
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
                        <Button
                            title={__("Registruj se").toUpperCase()}
                            onPress={() => {
                                setLoading(true);
                                _doRegister();
                            }}
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
        paddingVertical: 25,
        borderRadius: 5,
        marginBottom: 20,
        borderColor: appColors.textGray,
        marginHorizontal: 10,
        alignItems: 'center',
    }
})


export default RegisterScreen;