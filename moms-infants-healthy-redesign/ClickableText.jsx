import {Text, TouchableHighlight, View} from "react-native";
import appStyles from "./AppStyles";
import React from "react";
import * as Haptics from "expo-haptics";

export default function ClickableText(props){

    let onClick = () => {
        Haptics.selectionAsync().then();
        props.onClick();
    };

    return (
        <TouchableHighlight
            onPress={onClick}
        >
            <Text style={appStyles.ClickableText}>{props.text}</Text>
        </TouchableHighlight>
    )
}