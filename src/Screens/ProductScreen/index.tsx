import React, { Component ,useState } from 'react'
import { Alert, Text, View } from 'react-native'
import styles from './styles';
import product from '../../data/product'
import CPrice from '../../Components/CPrice'
import QuantitySelector from '../../Components/QuantitySelector'

import {Picker} from '@react-native-picker/picker'
import CButton from '../../Components/CButton';



const ProductScreen = () => {

    const [selectedOption,setSelectedOption]=useState();
    const [quantity,setQuantity]=useState(0);

    return (
        <View>
                <Text style={styles.title}> {product.title} </Text>

                <Picker
                selectedValue={selectedOption}

                onValueChange={
                    (itemValue)=>setSelectedOption(itemValue)
                }
                
                >
                {product.options.map((option)=><Picker.Item label={option} value={option}/>)}
                </Picker>
                <CPrice price={product.price} oldPrice={product.oldPrice}/>
                <Text style={styles.description}>{product.description}</Text>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}></QuantitySelector>
                <CButton text={"Add To Cart"} onPress={()=>alert("Add to cart")}></CButton>
                <CButton text={"Buy Now"} onPress={()=>alert("Buy Now")}></CButton>

        </View>
    )
}

export default ProductScreen

