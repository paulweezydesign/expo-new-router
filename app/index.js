import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import FadeIn from "./components/FadeIn";
import React, { useState } from "react";
import { MotiView, MotiText } from "moti";

export default function Index() {
    return ( <
        >
        <
        FadeIn >
        <
        View style = { styles.container } >
        <
        View style = { styles.main } >
        <
        MotiText from = {
            { opacity: 0, y: 0 } }
        animate = {
            { opacity: 1, y: -15 } }
        transition = {
            { type: "timing", duration: 800 } }
        style = { styles.title } >
        { " " }
        Home { " " } <
        /MotiText>{" "} <
        /View>{" "} <
        /View>{" "} <
        /FadeIn>{" "} <
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 64,
        fontWeight: 900,
    },
});