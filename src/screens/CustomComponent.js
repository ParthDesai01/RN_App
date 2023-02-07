import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const CustomComponent = () => {
    const Users = [
        {
            id: "1",
            name: "User1",
        },
        {
            id: "2",
            name: "User2",
        },
        {
            id: "3",
            name: "User3",
        },
        {
            id: "4",
            name: "User4",
        },
        {
            id: "5",
            name: "User5",
        },
        {
            id: "6",
            name: "User6",
        },
        {
            id: "7",
            name: "User7",
        },
        {
            id: "8",
            name: "User8",
        },
    ];
    return (
        <View>
            <FlatList
                data={Users}
                renderItem={(el) => {
                    return <Text style={styles.textStyle}>{el.item.name}</Text>;
                }}
				horizontal
				inverted
				keyExtractor={(key) => {
                    return key.id;
                }}
                style={styles.listStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        backgroundColor: "grey",
        fontSize: 40,
        padding: 30,
        margin: 20,
        textAlign: "center",
    },
    listStyle: {
        backgroundColor: "black",
        padding: 10,
    },
});

export default CustomComponent;
