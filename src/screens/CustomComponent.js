import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CustomComponent = () => {
	return (
		<View style={ styles.viewStyle }>
			<Text style={ styles.textStyle }>Custom Component</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: 50,
        width: 150,
        margin: 5,
        backgroundColor: "grey",
	},
	textStyle: {
		color: "white",
	},
});

export default CustomComponent;