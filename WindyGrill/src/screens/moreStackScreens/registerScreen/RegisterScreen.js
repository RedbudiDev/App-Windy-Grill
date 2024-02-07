import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { appColors } from '../../../helper/colors';

const RegisterScreen = () => {

    const [username, setUsername] = React.useState("");
    const [first_name, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddreess] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigation = useNavigation();
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
                        text={"REGISTER"}
                    />
                    <View style={styles.mainContentContainer}>
                        <Input
                            placeholder={"Username"}
                            multiline={false}
                            value={username}
                            onChangeText={setUsername}
                        />
                        <Input
                            placeholder={"First name"}
                            multiline={false}
                            value={first_name}
                            onChangeText={setFirstName}
                        />
                        <Input
                            placeholder={"Address"}
                            multiline={false}
                            value={address}
                            onChangeText={setAddreess}
                        />
                        <Input
                            placeholder={"Email Address"}
                            multiline={false}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType={"email-address"}
                        />
                        <Input
                            placeholder={"Password"}
                            multiline={false}
                            value={password}
                            onChangeText={setPassword}
                            secured={true}
                        />

                        <Button
                            title={"REGISTER"}
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