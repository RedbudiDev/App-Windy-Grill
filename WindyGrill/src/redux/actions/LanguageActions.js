import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncKeys } from "../../helper/strings";
import { UPDATE_LANGUAGE } from "./actionTypes";


export const updateLanguageValue = (data) => {
    return {
        type: UPDATE_LANGUAGE,
        payload: data
    }
}

export const updateLanguage = (data) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem(asyncKeys.languageKey, data);
            await dispatch(updateLanguageValue(data));
        } catch (error) {
            console.log("Error", error);
        }
    }
}

export const checkIfLanguageSelected = () => {
    return async (dispatch) => {
        try {
            const language = await AsyncStorage.getItem(asyncKeys.languageKey);
            if (language) {
                dispatch(updateLanguageValue(language));
            } else {
                dispatch(updateLanguageValue(null));
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
}