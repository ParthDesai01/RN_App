import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator,
} from "react-native";

const HookEffect = () => {
    const [userData, setUserData] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    const getUserData = async () => {
        try {
            const response = await fetch(
                "https://thapatechnical.github.io/userapi/users.json"
            );
            const data = await response.json();
            setUserData(data);
            setIsLoaded(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <View style={styles.container}>
            {isLoaded ? (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <View>
                    <Text style={{ fontSize: 25, textAlign: "center" }}>
                        Users
                    </Text>
                    <FlatList
                        data={userData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(key) => {
                            return key.id;
                        }}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.card}>
                                    <View style={styles.imgContainer}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.img}
                                        />
                                    </View>
                                    <Text style={styles.text}>
                                        Name: {item.name}
                                    </Text>
                                    <Text style={styles.text}>
                                        Mail: {item.email}
                                    </Text>
                                    <Text style={styles.text}>
                                        Mob: {item.mobile}
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    loader: {
        minHeight: "100%",
        justifyContent: "center",
    },
    container: {
        display: "flex",
        alignItems: "center",
        paddingTop: 30,
        backgroundColor: "lightblue",
    },
    imgContainer: {
        padding: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 25,
    },
    img: {
        height: 200,
        resizeMode: "cover",
    },
    text: {
        fontSize: 15,
        color: "white",
        marginLeft: 10,
        marginBottom: 15,
    },
    card: {
        backgroundColor: "black",
        borderRadius: 5,
        marginVertical: 10,
    },
});

export default HookEffect;
