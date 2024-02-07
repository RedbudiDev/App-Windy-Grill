import React from 'react';
import { Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import HeaderBackButton from '../../../components/HeaderBackButton';
import Input from '../../../components/Input';
import SectionTitle from '../../../components/SectionTitle';

import { appColors } from '../../../helper/colors';

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? null : "padding"}>
                <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

                    {/** header */}
                    <HeaderBackButton
                        onLeftIconPress={() => { navigation.goBack() }}
                    />

                    {/** SECTION TITLE: */}
                    <SectionTitle
                        text={"LOGIN"}
                        customContainerStyle={{ alignSelf: 'center' }}
                    />

                    {/** fields */}
                    <Input
                        placeholder={"Email Address"}
                        multiline={false}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType={"email-address"}
                        customInputStyle={{ backgroundColor: appColors.white }}
                    />
                    <Input
                        placeholder={"Password"}
                        multiline={false}
                        value={password}
                        onChangeText={setPassword}
                        secured={true}
                        customInputStyle={{ backgroundColor: appColors.white }}
                    />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { console.log("Forgott!") }}
                        style={styles.forgotContainer}
                    >
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>

                    {/** button */}
                    <Button
                        title={"LOGIN"}
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
    }
})

export default LoginScreen;