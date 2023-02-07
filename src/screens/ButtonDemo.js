import React from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Buttons = () => {
    return (
        <View>
            <Button
                title="Demo button"
                onPress={() => {
                    console.log("Click!");
                    Alert.alert("Click!");
                }}
                // disabled
            />
            <TouchableOpacity>
                <Text>Demo TO Button</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Buttons;
