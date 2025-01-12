
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../components/auth/SignIn'
import Home from '../components/main/Home';
import IconDetailsPage from '../components/main/IconDetails';
import QuizList from '../components/main/QuizList';
import Questions from '../components/main/Questions'
import ItemList from '../components/main/ItemList';
import Intro from '../components/intro/Intro';
import GetStarted from '../components/intro/GetStarted';

import IconsPage from '../components/main/IconsPage'
import { styles } from '../styles/Styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LearnMore from '../components/intro/LearnMore';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const navLayout = (header, navigation) => {
    return (
        {
            headerShown: true,
            title: header,
            headerStyle: {
                backgroundColor: '#800000',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
            },
            // headerRight: () => badgedIcon(navigation)
        }
    )
}

export const badgedIcon = (props) => {

    return (
        <TouchableOpacity style={[styles.rows, styles.navIconStyle]}  onPress={() => { props.navigate('Cart')}}>
            {/* <IonIcon size={25} color="#fff" name="cart" /> */}
            {/* <Badge styles={styles.badge}>0</Badge> */}
        </TouchableOpacity>
    )
}


// export const IntroScreen = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator screenOptions={{ headerShown: false, navigationBarColor: '#fff' }}>
//                 <Stack.Screen name="IntroSlider" component={IntroSlider} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }


export const AuthScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, navigationBarColor: '#fff' }}>
                <Stack.Screen initialRouteName='Intro' name="Intro" component={Intro} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="LearnMore" component={LearnMore} />
                <Drawer.Screen name="Home" component={Home} options={({ navigation })=>navLayout("Home", navigation)} />
                <Drawer.Screen name="ItemList" component={ItemList} options={({ navigation })=>navLayout("ItemList", navigation)} />
                <Stack.Screen name="IconsPage" component={IconsPage} options={({ navigation })=>navLayout("IconsPage", navigation)}/>
                <Stack.Screen name="IconDetailsPage" component={IconDetailsPage} options={({ navigation })=>navLayout("IconDetailsPage", navigation)}/>
                <Stack.Screen name="QuizList" component={QuizList} options={({ navigation })=>navLayout("QuizList", navigation)}/>
                <Stack.Screen name="Questions" component={Questions} options={({ navigation })=>navLayout("Questions", navigation)}/>
                {/* <Stack.Screen name="ConsultMedicalWorker" component={Consultation}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}



// export const MainScreen =()=>{
//     return(
//         <NavigationContainer >
//             <Drawer.Navigator  screenOptions={{navigationBarColor: '#fff'}} drawerContent={props => <SideMenu {...props} />}>
//                 <Drawer.Screen name="Home" component={Home} options={({ navigation })=>navLayout("Home", navigation)} />
//                 <Drawer.Screen name="CreateItem" component={CreateItem} options={({ navigation })=>navLayout("Create Item", navigation)} />
//                 <Drawer.Screen name="PointOfSale" component={PointOfSale} options={({ navigation })=>navLayout("Point Of Sale", navigation)} />
//                 <Drawer.Screen name="Orders" component={Orders} options={({ navigation })=>navLayout("Orders", navigation)} />
//                 <Drawer.Screen name="Sales" component={Sales} options={({ navigation })=>navLayout("Sales", navigation)} />
//                 <Drawer.Screen name="Settings" component={Settings} options={({ navigation })=>navLayout("Settings", navigation)} />
//                 <Drawer.Screen name="NotificationList" component={NotificationList} options={({ navigation })=>navLayout("NotificationList", navigation)} />
//                 <Drawer.Screen name="ViewItem" component={ViewItems} options={({ navigation })=>navLayout("Product List", navigation)} />
//                 <Drawer.Screen name="Cart" component={Cart} options={({ navigation })=>navLayout("Check Out", navigation)} /> 
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }


