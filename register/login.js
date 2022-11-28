import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useState} from "react";
import navigationContainer from "@react-navigation/native/src/NavigationContainer";
import Register from "./register";


export default function Login({navigation}) {

    const [email, setEmail] = useState("amir");
    const [password, setPassword] = useState("mansouri");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo2.png")} />


            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button} onPress={()=>{
                    navigation.navigate({"name" : "Register"})
                }}>create account?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={(

                )=>{
                    ToastAndroid.showWithGravity('connection .... ',ToastAndroid.LONG,ToastAndroid.BOTTOM)
                    navigation.navigate("Flat")

                }}>LOGIN</Text>
            </TouchableOpacity>




        </View>
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
