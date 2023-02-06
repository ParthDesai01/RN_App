import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App = () => {
	return (
		<View style={ styles.viewStyle }>
			<Text style={ styles.textStyle }>Hello World!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: 750,
	},
	textStyle: {
		color: "red",
	},
});

export default App;