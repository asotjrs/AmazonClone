import React from 'react'
import { View, Text, Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import CPrice from '../../Components/CPrice'

interface ProductItemProps{
     item: { id: string; title: string; image: string; avgRating: number; ratings: number; price: number; oldPrice?: number; } }




const ProductItem = ({item}: ProductItemProps) => {

    return (
        <View style={styles.page}>
            <View style={styles.root}>
                <Image style={styles.image} source={{uri:item.image}}/>

                <View style={styles.rightContainer}>

                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                {
                //`ratings....`
                }
                <View style={styles.ratingContainer}>
                    {
                        [...Array(5)].map((e,i)=><FontAwesome
                        
                        key={i}
                        name={i<Math.floor(item.avgRating) ? 'star':'star-o'}
                        size={18} color={"#e47911"}
                    
                        />
                        
                        
                        
                        )
                    }
                   
                    <Text>{item.avgRating}</Text>

                </View>
             <CPrice price={item.price} oldPrice={item.oldPrice ? item.oldPrice: -1}/>



                </View>
            </View>
        </View>
    )
}




export default ProductItem;



