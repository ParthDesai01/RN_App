import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const CardDetail = (props) => {
    const { width, height } = Dimensions.get("window");
    const [ratio, setRatio] = useState(0);
    useEffect(() => {
        return () => {
            setRatio(width / height);
        };
    });

    // console.log(props.uri)
    return (
        <View style={styles.listStyle}>
            <Text>From Image Component</Text>
            <Image
                style={[styles.imgStyle, { aspectRatio: ratio }]}
                source={{uri: props.uri}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imgStyle: {},
    listStyle: {},
});

export default CardDetail;
