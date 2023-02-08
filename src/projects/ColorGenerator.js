import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";

const ColorGenerator = () => {
    const [newColor, setNewColor] = useState([]);

    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        return `rgb(${r},${g},${b})`;
    };

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setNewColor([...newColor, randomColor()]);
                }}
            >
                <Text style={styles.button}>Generate random color</Text>
            </TouchableOpacity>
            <ScrollView>
                <FlatList
                    data={newColor}
                    // horizontal
                    
                    keyExtractor={(key) => key}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text
                                    style={{
                                        backgroundColor: item,
                                        color: "white",
                                        padding: 15,
                                        fontSize: 20,
                                        marginBottom: 30,
                                        marginHorizontal: 30,
                                        textAlign: "center",
                                        borderRadius: 5,
                                    }}
                                >
                                    {item}
                                </Text>
                            </View>
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightblue",
        fontSize: 25,
        padding: 15,
        textAlign: "center",
        color: "white",
        marginVertical: 40,
    },
    color: {
        backgroundColor: "red",
        color: "white",
        padding: 15,
        fontSize: 20,
        marginBottom: 30,
        marginHorizontal: 30,
        textAlign: "center",
        borderRadius: 5,
    },
});

export default ColorGenerator;
