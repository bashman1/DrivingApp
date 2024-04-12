import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Appearance } from 'react-native';
import { styles } from '../../styles/Styles';
import { Dimensions } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
// import IonIcon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get("window").width;
const ItemList = (props: any) => {

    const [items, setItems] = useState([
        {
            id: 1, icon: "", itemId: 1, data: [
                { id: 1, icon: "", name: "Mandatory Signs" },
                { id: 2, icon: "", name: "Warning Signs" },
                { id: 2, icon: "", name: "Information Signs" },
                { id: 2, icon: "", name: "Roadworks Signs" },
                { id: 2, icon: "", name: "Transerve Markings" },
                { id: 2, icon: "", name: "Other Road Markings" },
            ]
        },
        {
            id: 2, icon: "", itemId: 2, data: [
                { id: 1, icon: "", name: "Introduction to driving" },
                { id: 2, icon: "", name: "Basic Mechanics" },
                { id: 2, icon: "", name: "Defensive Driving" },
                { id: 2, icon: "", name: "Roadworks Signs" },
                { id: 2, icon: "", name: "Basic first aid" },
            ]
        }
    ]);
    const [selectedItems, setSelectedItems] = useState([])

    const filterItems = (items, id) => {
        let index = items.findIndex(element => element.itemId == id)
        console.log("**********************************" + id)
        console.log(items[index].data);
        setSelectedItems(items[index].data);
    }

    useEffect(() => {
        filterItems(items, props.route.params.id)
    });

    return (
        <ScrollView>
            <View style={styles.padding}>
                <View>
                    {
                        selectedItems.map((element) => {
                            return (
                                <TouchableOpacity style={[styles.card, styles.marginBottom]} onPress={()=>{ props.navigation.navigate("IconsPage", { id: element.id })}}>
                                    {/* <Text>{element.name}</Text> */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.fontWeightBold, styles.fontSize20]}>{element.name}</Text>

                                        <IonIcon name="arrow-forward" color={'000'} size={25}/>
                                        {/* <Icon name='calendar' /> */}
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>


            </View>

        </ScrollView>
    )
}
export default ItemList;