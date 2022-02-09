import React, { useState } from "react"
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from "react-native-gesture-handler"

// @todo all country code specific information should be extracted to a service.
const countryCodes = {
  'de_DE': '49',
  'en_EN': '44'
}

/** Constants */
// @todo Remove line of code below and all usages of this code prior to merging.
const shouldDebug = true;
// @todo remove line of code above.

// @todo extract to a service country code service.
const allowedCountryCodes = ['49', '44', '1-242'];
const maxCountryCodeLength = allowedCountryCodes.reduce((a, b) => b.length > a ? b.length : a, 0);
const allowedKeys = '0123456789-+';
/**
 * Returns the country code to make internal calls for the locale provided.
 * 
 * @param locale 
 */
 const getCountryCodeForLocale = (locale: string) => {
  if (countryCodes[locale] === undefined) {
    throw new Error(`Country code for locale ${locale} does not exist`);
  }

  return countryCodes[locale];
}

const defaultCountryCode = getCountryCodeForLocale('de_DE');

/**
 * Styles
 */
const style = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 20
  },
  debug: {
    fontStyle: 'italic',
    fontSize: 11,
    color: 'red',
    marginBottom: 2,
    marginLeft: 15
  }
})

/**
 * Validates if the currentValue is still building the countryCode.
 * This method will return true if the testSubject matches the matching portion of the country code.
 * The method will return false all the time that the length of the currentValue is less
 * than the largest country codes length and no matches have been found.
 * 
 * @param testSubject string 
 * @returns 
 */
const shouldInsertAsCountryCode = (testSubject: string) => {
  const matchedCountryCodes = allowedCountryCodes
    .map(c => `+${c}`)
    .filter(code => code.slice(0, testSubject.length) === testSubject);
  return (testSubject.length <= (maxCountryCodeLength + 1) && matchedCountryCodes.length > 0)
}

/**
 * The method will return the country code from the testSubject is a match is found.
 * All cases where a match is not found undefined will be returned.
 * 
 * @param testSubject string
 * @returns  string|undefined
 */
const getCountryCode = (testSubject: string): string|undefined => {
  const index = allowedCountryCodes
    .map(c => `+${c}`)
    .findIndex(c => c === testSubject.slice(0,c.length))
  return allowedCountryCodes[index];
}

/**
 * @todo Remove code and all usages of this code prior to merging.
 * 
 * Returns a Text view that will contain some debug information.
 * 
 * @param debugText 
 * @returns 
 */
const debugTextView = (debugText: string|null) => {
  if(!shouldDebug) return null;
  return debugText !== null ? (<Text style={style.debug}>{debugText}</Text>) : null;
} 

/**
 * Returns an TextInput component that accepts only digits that are contained within an
 * international telephone number that can receive SMS codes.
 * 
 * @returns 
 */
export const PhoneInput: React.FC = () => {
  // TODO: add a PhoneInput field that looks like the one in the screenshot
  // add validation to only allow phone numbers in the follwing format:
  // +[CountryCode][Rest] eg. +4915735260650
  // These should not be allowed:
  // 015735260650
  // +49015735260650
  // 004915735260650

  // If a phone number is not valid just delete the unvalid parts

  const [defaultValue, setDefaultValue] = useState(`+${defaultCountryCode}`);
  const [debugText, setDebugText] = useState(null);
  /**
   * Handles the validation
   * @param keyValue 
   * @returns 
   */
  const handleKeyPress = (keyValue: string) => {

     // @todo remove line below prior to merging or using this code.
    setDebugText(null)

    // @todo check if there is a React Native constant that can be used
    // instead of hardcoding the text Backspace.
    if (keyValue === 'Backspace') {
      return setDefaultValue(defaultValue.slice(0, -1));
    }

    // Ignore all input from disallowed keys.
    if(!allowedKeys.includes(keyValue)) {
      // @todo remove line below prior to merging or using this code.
      setDebugText(`Ignoring inputted key ${keyValue}`)
      return
    }

    // Handle the entering of the + sign.
    if (defaultValue.length === 0 && keyValue === '+') {
      return setDefaultValue('+');
    }

    let currentValue = defaultValue;

    // Set the current value to the current code if it is empty.
    if (currentValue.length === 0) {
      currentValue = `+`;
    }

    // Allow for the user to build up the area first
    // Only supported area codes will pass this test.
    if (shouldInsertAsCountryCode(`${currentValue}${keyValue}`)) {
      return setDefaultValue(`${currentValue}${keyValue}`);
    }

    const countryCode = getCountryCode(currentValue);
    // If the user has entered anything but a valid country code
    // then the keyValue should be inserted, so exit here.
    if(countryCode === undefined) {
      // @todo remove line below prior to merging or using this code.
      setDebugText(`Country code is undefined ignoring input ${keyValue}`)
      return;
    }

    const phoneNumber = currentValue.slice(countryCode.length + 1);

    // Ignore the 0 prefix
    if(phoneNumber.length === 0 && keyValue === '0') {
      // @todo remove line below prior to merging or using this code.
      setDebugText(`Ignoring 0 inputted key`)
      return
    }

    // @todo Add length validation to remaining parts of the phone number.
    setDefaultValue(`${currentValue}${keyValue}`)
  }

  return (
    <View>
      {
        // @todo remove line below prior to merging or using this code.
        debugTextView(debugText)
      }
      <TextInput
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          handleKeyPress(keyValue);
        }}
        style={style.main}
        value={defaultValue}
        keyboardType="phone-pad"
      ></TextInput>
    </View>
  )
}
