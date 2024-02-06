import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';
import Input from '../../../components/Input';
import { screens } from '../../../helper/strings';
import { appColors } from '../../../helper/colors';
import Button from '../../../components/Button';

const FeedbackScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = React.useState("");
    const [explanation, setExplanation] = React.useState("");
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "android" ? null : "padding"}>

                <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <Header
                        showLeftIcon
                        onLeftIconPress={() => { navigation.goBack() }}
                        showRightIcon
                        onRightIconPress={() => { navigation.navigate(screens.cartScreen) }}
                    />

                    {/** SECTION TITLE: */}
                    <SectionTitle
                        text={"GIVE US FEEDBACK"}
                    />

                    {/** page list sections: */}
                    <View style={styles.mainContentContainer}>
                        <Input
                            placeholder={"Email address"}
                            multiline={false}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType={"email-address"}
                        />
                        <Input
                            placeholder={"Explain your feedback"}
                            value={explanation}
                            onChangeText={setExplanation}
                            keyboardType={"default"}
                            multiline={true}
                        />
                        <Button
                            title={"Uplad Your Screenshot"}
                            onPress={() => { console.log("Upload photo") }}
                            customTitleStyle={{ fontSize: 14, color: appColors.black, alignSelf: 'flex-start' }}
                            customContainerStyle={{ backgroundColor: appColors.white, borderWidth: 1 }}
                        />
                        <Button
                            title={"SUBMIT FEEDBACK"}
                            onPress={() => { console.log("Submit feedback") }}
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
})


export default FeedbackScreen;