import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'

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
                <Text style={styles.price}>{`Starting from $13.32`}</Text>


                </View>
            </View>
        </View>
    )
}



const styles=StyleSheet.create({
    page:{

    },

    root:{
        flexDirection:'row',
        margin:10,
        borderWidth:1,
        borderColor:'#D1D1D1',
        borderRadius:10,
        backgroundColor:`#fff`

    },


    image:{

        height:150,
        width:100


    },
    rightContainer:{
        padding:10,
        flex:1,
        //flexDirection: 'column'


    },

    title:{


    },
    price:{

    }





});

export default HomeScreen;



