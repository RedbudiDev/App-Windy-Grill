import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import SectionTitle from '../../../components/SectionTitle';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

const LoginScreen = () => {

    const navigation = useNavigation();
    const __ = usePolyglot();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

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
                        onPress={() => { console.log("Login!") }}
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