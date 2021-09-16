import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'

interface ButtonProps{
    text:string;
    onPress: ()=>{}
}

const CButton = ({text,onPress}:ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default CButton

const styles= StyleSheet.create({
root:{

    backgroundColor:"#E47911",
    margin:10,
    height:35,
    justifyContent:'center',
    alignItems:'center'


},

text:{


}




})
