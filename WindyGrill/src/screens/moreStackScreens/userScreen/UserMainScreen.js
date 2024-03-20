import React from "react";
import { Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchData } from "../../../services/FetchClient";
import usePolyglot from "../../../hooks/usePolyglot";

import HeaderBackButton from "../../../components/HeaderBackButton";
import Input from "../../../components/Input";
import Loading from "../../../components/Loading";
import Button from "../../../components/Button";
import Toast from "react-native-toast-message";
import SectionTitle from "../../../components/SectionTitle";

import { globalStyles } from "../../../helper/globalStyles";
import { appColors } from "../../../helper/colors";
import { appIcons } from "../../../helper/icons";

const UserMainScreen = () => {
    // token redux state:
    const tokenReduxState = useSelector((state) => state.auth);
    const { token } = tokenReduxState;

    const navigation = useNavigation();
    const __ = usePolyglot();
    // fields in screen
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [initData, setInitData] = React.useState(null);

    const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

    const [loading, setLoading] = React.useState(false);

    /**
     * function for fetching user data
     */
    async function _fetchUserData() {
        try {
            const url = "V1/customers/me";
            const methode = "GET";
            const data = undefined;
            const response = await fetchData(url, methode, data, token);
            const user = response.data;
            setInitData(user);
            setEmail(user?.email);
            setFirstName(user?.firstname);
            setLastName(user?.lastname);
            setLoading(false);
        } catch (error) {
            console.log("Error:", error);
            setLoading(true);
        }
    }

    /** function for rendering button */
    const _renderButton = () => {
        return (
            <Button
                title={__("Ažuriraj").toUpperCase()}
                onPress={() => {
                    setLoading(true);
                    _doUpdate();
                }}
                disabled={isButtonDisabled}
                customContainerStyle={{ backgroundColor: isButtonDisabled ? appColors.textGray : appColors.red }}
            />
        )
    }

    /** function for updating */
    function _validateData() {
        if (!firstname.trim()) {
            return {
                success: false,
                message: __('Unesite Ime')
            }
        }
        if (!lastname.trim()) {
            return {
                success: false,
                message: __("Unesite Prezime")
            }
        }
        if (!email.trim()) {
            return {
                success: false,
                message: __("Unesite email")
            }
        }
        return {
            success: true,
            message: 'Aloo'
        }
    }

    /** function for updating customer */
    async function _doUpdate() {
        try {
            const validateData = _validateData();
            const { message, success } = validateData;
            if (success) {
                const url = `V1/customers/me`;
                const methode = "PUT";
                const dataForServer = {
                    customer: {
                        id: initData?.group_id,
                        email: email,
                        firstname: firstname,
                        lastname: lastname,
                        website_id: initData?.website_id
                    }
                };
                const response = await fetchData(url, methode, dataForServer, token);
                const { data } = response;
                if (response?.success) {
                    setInitData(data);
                    Toast.show({
                        text1: __("Uspešno ste ažurirali korisnika"),
                        type: 'success',
                        position: 'top',
                        visibilityTime: 1500
                    });
                    setLoading(false);
                } else {
                    Toast.show({
                        text1: __("Došlo je do greške"),
                        type: 'error',
                        position: 'top',
                        visibilityTime: 1500
                    });
                    setLoading(false);
                }
            } else {
                Toast.show({
                    text1: message,
                    type: 'error',
                    position: 'top',
                    visibilityTime: 1500
                });
                setLoading(false);
            }
        } catch (error) {
            console.log("Error:", error.message?.response);
            Toast.show({
                text1: __("Došlo je do greške"),
                type: 'error',
                position: 'top',
                visibilityTime: 1500
            });
            setLoading(false);
        }
    }

    /** function for validation if button is shown */
    function _validateButton() {
        if (email !== initData?.email) {
            setIsButtonDisabled(false);
            return;
        }
        if (firstname !== initData?.firstname) {
            setIsButtonDisabled(false);
            return;
        }
        if (lastname !== initData?.lastname) {
            setIsButtonDisabled(false);
            return;
        }
        setIsButtonDisabled(true);
        return;
    }

    React.useEffect(() => {
        if (initData) {
            _validateButton();
        }
    }, [email, firstname, lastname, initData]);

    React.useEffect(() => {
        setLoading(true);
        _fetchUserData();
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? null : "padding"}>
                <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    {/** header */}
                    <HeaderBackButton
                        onLeftIconPress={() => { navigation.goBack() }}
                    /> 
                    {/** LOGO IMAGE */}
                    <Image
                        style={styles.logoImage}
                        source={appIcons.logo}
                    />
                    <SectionTitle
                        text={`${__("Zdravo")} ${initData?.firstname}`}
                        customContainerStyle={{ marginLeft: 10, marginTop: 5 }}
                        customTextStyle={{ color: appColors.black }}
                    />
                    {/** fields */}
                    <Text style={styles.titleText}>{__("Ime")}</Text>
                    <Input
                        placeholder={__("Ime")}
                        multiline={false}
                        value={firstname}
                        onChangeText={setFirstName}
                        customInputStyle={{ backgroundColor: appColors.white }}
                    />
                    <Text style={styles.titleText}>{__("Prezime")}</Text>
                    <Input
                        placeholder={__("Prezime")}
                        multiline={false}
                        value={lastname}
                        onChangeText={setLastName}
                        customInputStyle={{ backgroundColor: appColors.white }}
                    />
                    <Text style={styles.titleText}>{__("E-mail")}</Text>
                    <Input
                        placeholder={__("E-mail")}
                        multiline={false}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType={"email-address"}
                        customInputStyle={{ backgroundColor: appColors.white }}
                    />
                    {_renderButton()}
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
    titleText: {
        marginHorizontal: 20,
        color: appColors.black,
        ...globalStyles.textFontSemiBold
    },
    logoImage: {
        width: 120,
        height: 120,
        alignSelf: 'center'
    },
})

export default UserMainScreen;