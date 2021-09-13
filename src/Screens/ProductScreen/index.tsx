import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles';
import product from '../../data/product'
import CPrice from '../../Components/CPrice'



const ProductScreen = () => {
    return (
        <View>
                <Text style={styles.title}> {product.title} </Text>
                <CPrice price={product.price} oldPrice={product.oldPrice}/>
        </View>
    )
}

export default ProductScreen

