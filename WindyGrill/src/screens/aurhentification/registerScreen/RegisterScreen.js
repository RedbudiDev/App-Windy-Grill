import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { appColors } from '../../../helper/colors';

const RegisterScreen = () => {

    const navigation = useNavigation();
    const __ = usePolyglot();

    const [username, setUsername] = React.useState("");
    const [first_name, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddreess] = React.useState("");
    const [password, setPassword] = React.useState("");

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
                            customInputStyle={{backgroundColor: appColors.white}}
                        />
                        <Input
                            placeholder={__("Ime")}
                            multiline={false}
                            value={first_name}
                            onChangeText={setFirstName}
                            customInputStyle={{backgroundColor: appColors.white}}
                        />
                        <Input
                            placeholder={__("Adresa")}
                            multiline={false}
                            value={address}
                            onChangeText={setAddreess}
                            customInputStyle={{backgroundColor: appColors.white}}
                        />
                        <Input
                            placeholder={__("E-mail")}
                            multiline={false}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType={"email-address"}
                            customInputStyle={{backgroundColor: appColors.white}}
                        />
                        <Input
                            placeholder={__("Šifra")}
                            multiline={false}
                            value={password}
                            onChangeText={setPassword}
                            secured={true}
                            customInputStyle={{backgroundColor: appColors.white}}
                        />

                        <Button
                            title={__("Registruj se").toUpperCase()}
                            onPress={() => { console.log("Register!") }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    mainContentContainer: {
        paddingVertical: 25,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        marginBottom: 20,
        borderWidth: Platform.OS === "android" ? 0 : 1,
        borderColor: appColors.textGray
    }
})


export default RegisterScreen;