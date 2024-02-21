import React from "react"
import {ActivityIndicator, StyleSheet, Text,View} from "react-native"

const Loading=()=>{
    return(
        <View style={StyleSheet.loadingContainer}>
            <ActivityIndicator size="large" color="red"/>
        </View>
    )
}

const styles=StyleSheet.create({
    loadingContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Loading