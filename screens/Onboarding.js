import React, {useState} from "react";
import {
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    StyleSheet,
    Platform,
} from "react-native";
import { validateName, validateEmail } from "../utils/validate";

export const Onboarding = () => {

    const [firstName, onChangeFirstName] = useState("")
    const [email, onChangeEmail] = useState("")

    const isFirstNameValid = validateName(firstName)
    const isEmailValid = validateEmail(email)

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}>

            <View style={styles.headerBox}>
                <Image
                    source={require('../assets/logo1.png')}
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                    style={styles.logo}
                />

                <Text style={styles.headerText}>Little Lemon</Text>
            </View>

            <View style={styles.ctn}>
                <Text style={styles.regularText}>Let us get to know you</Text>
            </View>

            <View style={styles.inputBox}>
                <Text style={styles.regularText}>First Name</Text>
                <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={onChangeFirstName}
                    placeholder={'First Name'}
                />

                <Text style={styles.regularText}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                />
            </View>

           <Pressable
                style={[styles.button, isFirstNameValid && isEmailValid ? "" : styles.buttonDisabled]}
                disabled={!isEmailValid && !isFirstNameValid}

           >
            <Text style={styles.regularText}>Next</Text>
           </Pressable>

        </KeyboardAvoidingView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#EDEFEE',
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    ctn: {
        marginTop: 30,
        marginBottom: 60,

    },

    regularText: {
        fontSize: 20,
        fontWeight: '500',
        justifyContent: 'center',
        alignSelf: 'center',

    },

    inputBox: {
        marginTop: 20,
    },

    input: {
        borderColor: "#fbdabb",
        backgroundColor: "#fbdabb",
        alignSelf: "stretch",
        height: 50,
        margin: 18,
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        borderRadius: 9,
    },

    button: {
        borderColor: "#f4ce14",
        backgroundColor: "#f4ce14",
        borderRadius: 9,
        marginRight: 18,
        padding: 10,
        borderWidth: 1,
        width: 200,
        alignSelf: 'flex-end',
    },

    buttonDisabled: {
        backgroundColor: "#f1f4f7",
    }
})

