import { useSelector } from 'react-redux';
import { dictionary, languages } from '../helper/dictionary';



/**
 * Handle translation in app
 * @returns {function(string): string} The function that will try to translate a phraze into the current language.
 */

export default function usePolyglot() {
    const lan = useSelector((state) => state.language.lan);
    return (phrase) => {

        // Make sure the phrase exists in dictionary
        const translation = dictionary[phrase];
        if(translation){

            //Get the index of current language, and make sure it exists
            const index = languages[lan ?? null] ?? null
            if(index != null){
                return translation[index]
            }
        }

        // Unable to translate, return the original
        return phrase;
    }
    
}