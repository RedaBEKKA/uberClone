import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default function HomeSearch() {
    return (
        <View>
            
            {/* Input box */}
                <View style={styles.inputBox}>
                    <Text style={styles.inputText}>Ou aller ?</Text>
                    <View style={styles.timeContainer}>
                        <AntDesign name="clockcircle" size={16} color="#535353" />
                        <Text>Maintenant</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={16} />

                    </View>
                </View>

            {/* previous destination */}
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="clockcircle" color="#fff" size={19}/>
                    </View>
                    <Text style={styles.decorationText}>BigNov salon de thé</Text>
                </View>

            {/* home destination */}
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor:"#e7e7e7",
        padding:10,
        margin:10,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#434343'
    },
    timeContainer:{
        flexDirection:'row',
        width:100,
        justifyContent:"space-between",
        backgroundColor:'#fff',
        padding:10,
        borderRadius:50
    },
    row:{
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#bdbdbd'

    },
    iconContainer:{
        backgroundColor:"#b3b3b3",
        padding:10,
        borderRadius:25
    },
    decorationText:{
        marginLeft:10,
        fontWeight:'600',
        fontSize:16
    }
})
