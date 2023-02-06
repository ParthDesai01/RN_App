import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";

const App = () => {
	return (
		<View style={ styles.viewStyle }>
			<Text style={ styles.textStyle }>Hello World!</Text>
			<CustomComponent />
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: 780,
		backgroundColor: "black",
	},
	textStyle: {
		color: "white",
	},
});

export default App;