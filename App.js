import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NetflixCard from "./src/components/NetflixCard";
import Buttons from "./src/screens/ButtonDemo";
import Counter from "./src/projects/Counter";
import CustomComponent from "./src/screens/CustomComponent";
import Top10List from "./src/screens/FlatListDemo";
import Images from "./src/screens/Images";
import ColorGenerator from "./src/projects/ColorGenerator";
import HookEffect from "./src/screens/HookEffect";
import LoginForm from "./src/screens/LoginForm";
import Home from "./src/screens/Home";

const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginForm} />
                <Stack.Screen name="HomePage" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>

        // <View>
        // {/* <LoginForm /> */}
        // {/* <HookEffect /> */}
        // {/* <ColorGenerator/> */}
        // {/* <Counter /> */}
        // {/* <Top10List/> */}
        // {/* <NetflixCard /> */}
        // {/* <CustomComponent /> */}
        // {/* <Images /> */}
        // {/* <Buttons /> */}
        // </View>
    );
};

const styles = StyleSheet.create({});

export default App;
