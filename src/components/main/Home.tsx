import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Home = (props: any) => {

    useEffect(() => {
    });

    return (
        <ScrollView>
            <View style={styles.padding}>
                <View style={styles.marginBottom}>
                    <Text>Home</Text>
                </View>
                <View style={styles.marginBottom}>
                    <TouchableOpacity style={styles.touchableButton} onPress={() => { }}>
                        <Text style={styles.healthPalWhite}>After Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )

}
export default Home;