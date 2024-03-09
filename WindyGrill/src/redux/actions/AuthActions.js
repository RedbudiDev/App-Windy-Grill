import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncKeys } from "../../helper/strings";
import { UPDATE_TOKEN } from "./actionTypes";

export const updateTokenState = (data) => {
    return {
        type: UPDATE_TOKEN,
        payload: data
    }
}

export const updateToken = (data) => {
    return async (dispatch) => {
        try {
            await AsyncStorage.setItem(asyncKeys.tokenKey, data);
            await dispatch(updateTokenState(data));
        } catch (error) {
            console.log("Error", error);
        }
    }
}

export const checkIfUserLoggedIn = () => {
    return async (dispatch) => {
        try {
            const token = await AsyncStorage.getItem(asyncKeys.tokenKey);
            if (token) {
                dispatch(updateTokenState(token));
            } else {
                dispatch(updateTokenState(null));
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
}