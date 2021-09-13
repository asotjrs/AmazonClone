import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface PriceInterfaceProps{
    oldPrice:number;
    price:number
}

const CPrice = ({oldPrice, price}: PriceInterfaceProps) => {



    return (
        <View>
            <Text style={styles.price}>
                    {`$${price}`}
                
                <Text style={styles.oldPrice}>{`  $${oldPrice}`}</Text> </Text>
        </View>
    )
}

export default CPrice;
