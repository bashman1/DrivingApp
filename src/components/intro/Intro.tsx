import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';

const Intro = (props: any) => {
    useEffect(() => {
    });

    return (
        <ScrollView>
            <View style={styles.padding}>
                <View style={styles.marginBottom}>
                    <Text>Intro</Text>
                </View>
                <View style={styles.marginBottom}>
                    <TouchableOpacity style={styles.touchableButton} onPress={() => { props.navigation.navigate('SignIn') }}>
                        <Text style={styles.healthPalWhite}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </ScrollView>
    )

}
export default Intro;