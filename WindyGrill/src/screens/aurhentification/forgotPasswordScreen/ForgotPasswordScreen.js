import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import SectionTitle from '../../../components/SectionTitle';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const __ = usePolyglot();
    
    const [email, setEmail] = React.useState("");

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
                        <Text style = {{marginHorizontal: 20, color: appColors.black, fontFamily: 'FlameRegular', textAlign: 'center'}}>
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

                        {/** button */}
                        <Button
                            title={__("Resetuj šifru").toUpperCase()}
                            onPress={() => { console.log("Reset!") }}
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
        shadowColor: appColors.black,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        marginBottom: 20,
        marginHorizontal: 10,
        alignItems: 'center'
    }
});

export default ForgotPasswordScreen;