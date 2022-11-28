import {StatusBar} from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Register from "./register/register"
import Login from "./register/login";
import Flat from "./ScreenImage/FlastScreen"

export default function App() {
    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Login"}
                              component={Login}/>
                <Stack.Screen name={"Register"}
                              component={Register}/>
                <Stack.Screen name={"Flat"}
                              component={Flat}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,

    },

    inputView: {
        backgroundColor: "#1CA7CA",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1C7ECA",
    },
});
