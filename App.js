import React from "react";
import { StyleSheet, View } from "react-native";
import NetflixCard from "./src/components/NetflixCard";
import Buttons from "./src/screens/ButtonDemo";
import Counter from "./src/projects/Counter";
import CustomComponent from "./src/screens/CustomComponent";
import Top10List from "./src/screens/FlatListDemo";
import Images from "./src/screens/Images";
import ColorGenerator from "./src/projects/ColorGenerator";
import HookEffect from "./src/screens/HookEffect";

const App = () => {
    return (
        <View>
            <HookEffect />
            {/* <ColorGenerator/> */}
            {/* <Counter /> */}
            {/* <Top10List/> */}
            {/* <NetflixCard /> */}
            {/* <CustomComponent /> */}
            {/* <Images /> */}
            {/* <Buttons /> */}
        </View>
    );
};

const styles = StyleSheet.create({});

export default App;
