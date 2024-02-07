import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import SectionTitle from '../../../components/SectionTitle';
import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? null : "padding"}>
                <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    {/** header */}
                    <Header
                        showLeftIcon
                        onLeftIconPress={() => { navigation.goBack() }}
                        showRightIcon
                        onRightIconPress={() => { navigation.navigate(screens.cartScreen) }}
                    />

                    {/** SECTION TITLE: */}
                    <SectionTitle
                        text={"FORGOT PASSWORD?"}
                    />
                    {/** content */}
                    <View style={styles.mainContentContainer}>
                        <Text style = {{marginHorizontal: 20, color: appColors.black}}>
                            {
                                "Lost your password? Please enter your username or email address. You will recive a link to create a new password via email."
                            }
                        </Text>
                        {/** fields */}
                        <Input
                            placeholder={"Email address or username"}
                            multiline={false}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType={"email-address"}
                            customInputStyle={{ backgroundColor: appColors.white }}
                        />

                        {/** button */}
                        <Button
                            title={"RESET PASSWORD"}
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
    },
    mainContentContainer: {
        backgroundColor: appColors.white,
        paddingVertical: 25,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        marginBottom: 20
    }
});

export default ForgotPasswordScreen;