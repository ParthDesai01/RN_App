import React, { useEffect, useState } from "react";
import { Text, View} from "react-native";
import CardDetail from "../components/CardDetail";

const Images = () => {
    return (
        <View>
            <CardDetail uri = "https://images.pexels.com/photos/6752597/pexels-photo-6752597.jpeg"/>
            <CardDetail uri = "https://images.pexels.com/photos/10297673/pexels-photo-10297673.jpeg"/>
            <CardDetail uri = "https://images.pexels.com/photos/6102085/pexels-photo-6102085.jpeg"/>
        </View>
    );
};

export default Images;
