import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { fetchData } from "../../../services/FetchClient";
import usePolyglot from "../../../hooks/usePolyglot";

import HeaderBackButton from "../../../components/HeaderBackButton";
import Input from "../../../components/Input";
import Loading from "../../../components/Loading";

import { globalStyles } from "../../../helper/globalStyles";
import { appColors } from "../../../helper/colors";

const UserMainScreen = () => {
    // token redux state:
    const tokenReduxState = useSelector((state) => state.auth);
    const {token} = tokenReduxState;

    const navigation = useNavigation();
    const __ = usePolyglot();
    // fields in screen
    const [firstname, setFirstName] = React.useState('');
    const [lastname, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

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
            setEmail(user?.email);
            setFirstName(user?.firstname);
            setLastName(user?.lastname);
            setLoading(false);
        } catch (error) {
            console.log("Error:", error);
            setLoading(true);
        }
    }

    React.useEffect(() => {
        setLoading(true);
        _fetchUserData();
    }, []);

    if(loading) {
        return <Loading />
    }
    return (
        <SafeAreaView style={styles.container}>
            {/** header */}
            <HeaderBackButton
                onLeftIconPress={() => { navigation.goBack() }}
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
            <Text style = {styles.titleText}>{__("Prezime")}</Text>
            <Input
                placeholder={__("Prezime")}
                multiline={false}
                value={lastname}
                onChangeText={setLastName}
                customInputStyle={{ backgroundColor: appColors.white }}
            />
            <Text style = {styles.titleText}>{__("E-mail")}</Text>
            <Input
                placeholder={__("E-mail")}
                multiline={false}
                value={email}
                onChangeText={setEmail}
                keyboardType={"email-address"}
                customInputStyle={{ backgroundColor: appColors.white }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.baseColor
    },
    titleText:{ 
        marginHorizontal: 20,
        color: appColors.black,
        ...globalStyles.textFontSemiBold
    }
})

export default UserMainScreen;