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
        { id: 1, indicator:'details', type: 'community', icon: "car-key", name: "Road Signs" },
        { id: 2, indicator:'details', type: 'community', icon: "book", name: "Basic Theory" },
        { id: 3, indicator:'icons', type: 'community', icon: "white-balance-sunny", name: "Road Markings" },
        { id: 4, indicator:'icons', type: 'community', icon: "traffic-light", name: "Traffic Signals" },
        { id: 5, indicator:'quiz', type: 'community', icon: "gavel", name: "Exercises" },
        { id: 6, indicator:'settings', type: 'ionic', icon: "settings-sharp", name: "Settings" },
        
    ])


    const goToDetailsPage=(element: { id: any; indicator?: string; type?: string; icon?: string; name?: string; }, direction: string)=>{
        if(direction=='details'){
            props.navigation.navigate("ItemList", { id: element.id })
        }else if(direction == 'icons'){
            props.navigation.navigate("IconsPage", { id: element.id })
        }else if(direction == 'quiz'){
            props.navigation.navigate("QuizList", { id: element.id })
        }else if(direction == 'settings'){
            props.navigation.navigate("ItemList", { id: element.id })
        }
    }

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
                                        <TouchableOpacity style={[styles.card, styles.minWidth, styles.itemCenter]} onPress={() => { goToDetailsPage(element, element.indicator) }}>
                                            {element.type == 'ionic' ? (
                                                <IonIcon name={element.icon} color={appColor()} size={60} />
                                            ) : (
                                                <Icon name={element.icon} size={60} color={appColor()} />
                                            )}
                                            <Text style={[styles.healthPalBlue, styles.fontWeightBold, styles.fontSize15]}>{element.name}</Text>
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