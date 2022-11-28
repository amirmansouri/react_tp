import {FlatList, Image, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

export default function FlatScreen(){
    
    const image = [
        {image: require("../assets/download.jpg"),txt:"landrover" ,key: 1},
        {image: require("../assets/Logo-Citroen.png"),txt:"citroen" , key: 2},
        {image: require("../assets/download.jpg"), key: 3},
        {image: require("../assets/infinity.jpg"), key: 4},
    ];



  return(
      <View style={styles.container} >
<TextInput style={styles.search} placeholder={"search"} ></TextInput>
        <FlatList  numColumns={3   } data={image} renderItem={({item})=>(

            <View>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.txt}>{item.txt}</Text>
            </View>

        )}
        />
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image :{
        marginTop: 20,
        // alignItems: "center",
        // justifyContent: "center",
        // padding:100,
        // marginTop : 24,

    },
    txt :{
alignItems:"center",
        marginTop : 24,
        justifyContent: "center",

    },
    search:{
        marginTop:20,
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    }
})