import React,{useState} from 'react'
import { View, Text ,Pressable, StyleSheet} from 'react-native';



const QuantitySelector = ({quantity,setQuantity}) => {

    const onMinus=()=>{

       quantity===0 ? setQuantity(0): setQuantity(quantity-1);
    
    }

    const onPlus=()=>{
        setQuantity(quantity+1);
    }




    return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}><Text style={styles.buttonText}>{'-'}</Text></Pressable>
            <Text style={styles.quantity}>{`${quantity}`}</Text>
            <Pressable onPress={onPlus} style={styles.button}><Text style={styles.buttonText}>{'+'}</Text></Pressable>
        </View>
    )
}

export default QuantitySelector;


const styles=StyleSheet.create({

root:{
flexDirection:'row',
alignItems:'center',
borderWidth:1,
borderColor:'#E3E3E3',
width:150,

justifyContent:'space-between'


},
button:{
    width:35,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#C2C2C2'



},

buttonText:{
    fontSize:20

},
quantity:{
color:"#007EB9"

}







})