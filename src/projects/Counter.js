import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Counter = () => {
    const [n, setN] = useState(0);
    return (
        <View>
            <Text style={styles.digits}>Counter: {n}</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    setN(n+1);
                }}
            >
                <Text style={styles.text}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} 
            onPress={() => {
                setN(0);
            }}>
                <Text style={styles.text}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => {
                if (n>0) {
                    setN(n-1);
                } else {
                    setN(0);                    
                }
            }}>
                <Text style={styles.text}>-1</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    digits: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 150,
        marginBottom: 50,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 30,
    },
    buttonStyle: {
        backgroundColor: "black",
        borderRadius: 5,
        margin: 20,
        padding: 15,
    },
});

export default Counter;
