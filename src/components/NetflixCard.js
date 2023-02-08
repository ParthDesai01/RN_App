import React from "react";
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
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

const NetflixCard = () => {
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
                <Text style={styles.titleStyle}>Netflix Card</Text>
                <View style={styles.card}>
                    <Image
                        style={styles.imgStyle}
                        source={{
                            uri: "https://0.soompi.io/wp-content/uploads/2022/01/21005502/all-of-us-are-dead-poster.jpeg",
                        }}
                    />
                    <View style={styles.cardbody}>
                        <Text style={styles.cardBodyTitle}>
                            All Of Us Are Dead
                        </Text>
                        <Text style={styles.bodyText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                        <TouchableOpacity
                            style={styles.ActionButton}
                            onPress={() => {
                                Linking.openURL("https://www.netflix.com/in/");
                            }}
                        >
                            <Text>Watch Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    cardbody: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 250,
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    titleStyle: {
        fontSize: 30,
        fontFamily: "Poppins_700Bold",
    },
    imgStyle: {
        height: 350,
        width: 250,
    },
    cardBodyTitle: {
        fontSize: 20,
        fontFamily: "Poppins_500Medium",
    },
    bodyText: {
        color: "grey",
        fontFamily: "Poppins_300Light",
        textAlign: "justify",
    },
    ActionButton: {
        backgroundColor: "#fd4a4a",
        color: "white",
        marginTop: 10,
        padding: 10,
    },
});

export default NetflixCard;
