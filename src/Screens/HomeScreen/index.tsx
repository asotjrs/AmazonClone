import React from 'react'
import { View, Text, StyleSheet ,Image, FlatList} from 'react-native'
import ProductItem from '../../Components/ProductItem';
import products from  '../../data/products';

const HomeScreen = () => {
    return (
        <View style={styles.page}>

            <FlatList
            data={products}
             renderItem={({item}) => <ProductItem item={item} />}
            showsVerticalScrollIndicator={false}
            />


        </View>
    )
}



const styles=StyleSheet.create({
    page:{
        padding:10

    },





});

export default HomeScreen;



