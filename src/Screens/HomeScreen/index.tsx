import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.root}>
                <Image style={styles.image} source={{uri:`https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg`}}/>

                <View style={styles.rightContainer}>

                <Text style={styles.title} numberOfLines={3}>{`Clean Architecture: A Craftsman's Guide to Software Structure and Design`}</Text>
                {
                //`ratings....`
                }
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={18} color={"#e47911"}/>
                    <FontAwesome name="star" size={18} color={"#e47911"}/>
                    <FontAwesome name="star" size={18} color={"#e47911"}/>
                    <FontAwesome name="star-half-full" size={18} color={"#e47911"}/>
                    <FontAwesome name="star-o" size={18} color={"#e47911"}/>
                    <Text>122388</Text>

                </View>
                <Text style={styles.price}>
                    {`Starting from $13.32 `}
                
                <Text style={styles.oldPrice}>{` $16.83`}</Text>

                </Text>



                </View>
            </View>
        </View>
    )
}



const styles=StyleSheet.create({
    page:{
        padding:10

    },

    root:{
        flexDirection:'row',
        
        borderWidth:1,
        borderColor:'#D1D1D1',
        borderRadius:10,
        backgroundColor:`#fff`

    },


    image:{
        flex:2,
        height:150,
        width:100,
        resizeMode:'contain'


    },
    rightContainer:{
        padding:10,
        flex:3,
        //flexDirection: 'column'


    },

    title:{

        fontSize:18,


    },
    price:{
        fontSize:16,
        fontWeight:'bold'

    },

    ratingContainer:{
        flexDirection:'row',
        alignItems:'center'

    },
    oldPrice:{
        fontSize:12,
        textDecorationLine:'line-through',
        
    

    }





});

export default HomeScreen;



