import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { screens } from '../../../helper/strings';
import { appColors } from '../../../helper/colors';
import { globalStyles } from '../../../helper/globalStyles';

const FeedbackScreen = () => {

    const navigation = useNavigation();
    const __ = usePolyglot();

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
                        text={__("Ostavite utiske").toUpperCase()}
                    />

                    {/** page list sections: */}
                    <View style={styles.mainContentContainer}>
                        <Input
                            placeholder={__("E-mail")}
                            multiline={false}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType={"email-address"}
                        />
                        <Input
                            placeholder={__("Opis Vašeg utiska")}
                            value={explanation}
                            onChangeText={setExplanation}
                            keyboardType={"default"}
                            multiline={true}
                        />
                        <Button
                            title={__("Ostavite sliku")}
                            onPress={() => { console.log("Upload photo") }}
                            customTitleStyle={{ ...globalStyles.textFontRegular, fontSize: 14, color: appColors.black, alignSelf: 'flex-start' }}
                            customContainerStyle={{ backgroundColor: appColors.white, borderWidth: 1 }}
                        />
                        <Button
                            title={__("Pošaljite utiske").toUpperCase()}
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
})


export default FeedbackScreen;