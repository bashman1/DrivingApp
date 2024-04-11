import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import {appColor} from '../../services/CommonService'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get("window").width;
const Home = (props: any) => {

    const [items, setItems] = useState([
        { id: 1, type: 'community', icon: "car-key", name: "Road Signs" },
        { id: 2, type: 'community', icon: "book", name: "Basic Theory" },
        { id: 3, type: 'community', icon: "white-balance-sunny", name: "Road Markings" },
        { id: 4, type: 'community', icon: "traffic-light", name: "Traffic Signals" },
        { id: 5, type: 'community', icon: "gavel", name: "Exercises" },
        { id: 6, type: 'ionic', icon: "settings-sharp", name: "Settings" },
    ])

    useEffect(() => {
    });

    return (
        <ScrollView>
            <View style={styles.padding}>
                <View style={styles.marginBottom}>
                    <View style={styles.gridContainer}>
                        {
                            items.map((element) => {
                                return (
                                    <View style={[styles.item, styles.padding]}>
                                        <TouchableOpacity style={styles.card} onPress={() => { props.navigation.navigate("ItemList", { id: element.id }) }}>
                                            {element.type == 'ionic' ? (
                                                <IonIcon name={element.icon} color={appColor()} size={100} />
                                            ) : (
                                                <Icon name={element.icon} size={100} color={appColor()} />
                                            )}
                                            <Text style={[styles.healthPalBlue, styles.fontWeightBold, styles.fontSize20]}>{element.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Home;