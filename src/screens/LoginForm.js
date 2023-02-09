import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const LoginForm = ({navigation}) => {
    const [agree, setAgree] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        if(userName == "admin"&&password=="admin"){
            Alert.alert("Login Successfull!");
            navigation.navigate("HomePage", {username : `${userName}`});
        }else{
            Alert.alert("Incorrect username or password!");

        }
    };

    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login Form</Text>
                <View>
                    <Text style={styles.label}>Enter your name</Text>
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="none"
                        autoCorrect={false}
                        // value={userName}
                        onChangeText={(actualData) => {
                            setUserName(actualData);
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Enter your password</Text>
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(actualData) => {
                            setPassword(actualData);
                        }}
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        style={styles.checkbox}
                        value={agree}
                        onValueChange={() => {
                            setAgree(!agree);
                        }}
                        color={agree ? "blue" : undefined}
                    />
                    <Text>I have read and agree with the t&c</Text>
                </View>

                <TouchableOpacity
                    style={[
                        styles.button,
                        { backgroundColor: agree ? "blue" : "lightgrey" },
                    ]}
                    disabled={!agree}
                    onPress={() => {
                        submit();
                    }}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            { color: agree ? "white" : "black" },
                        ]}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        margin: 40,
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        fontFamily: "Poppins_700Bold",
    },
    label: {
        fontSize: 17,
        marginBottom: 5,
        marginLeft: 10,
    },
    inputField: {
        borderWidth: 1,
        height: 40,
        marginBottom: 20,
        borderRadius: 5,
        paddingLeft: 10,
    },
    checkbox: {
        marginRight: 10,
    },
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 30,
        marginTop: 40,
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
    },
});

export default LoginForm;
