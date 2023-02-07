import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Buttons from "./src/screens/ButtonDemo";
import CustomComponent from "./src/screens/CustomComponent";
import Images from "./src/screens/Images";

const App = () => {
    return (
        <ScrollView>
            <CustomComponent />
            <Images />
            <Buttons />
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default App;
