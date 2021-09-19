import React, { useCallback, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet ,useWindowDimensions} from 'react-native'


const ImageCarousel = ({images}:{images:string[]}) => {

    const [activeIndex, setactiveIndex] = useState(0)
    const windowWidth=useWindowDimensions().width;


    const onFloatListUpdate=useCallback(
        ({viewableItems}) => {

            if(viewableItems>0){
                setactiveIndex(viewableItems[0].index)
            }
 
            
        },
        [],
    )

    return (
        <View style={styles.root}>


        <FlatList
            data={images}
            renderItem={({item})=> (<Image
            style={[styles.images,{width:windowWidth-40}]}
            source={{uri:item}} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth-20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            viewabilityConfig={{
                waitForInteraction: true,
                viewAreaCoveragePercentThreshold:50,
               

            }}
            onViewableItemsChanged={onFloatListUpdate}
        
        />

        <View style={styles.dots}>
                {
                    images.map((image,index)=>{

                            return <View style={[styles.dot,{

                                backgroundColor: activeIndex === index ? '#C9C9C9':'#EDEDED'
                            }]}>

                            </View>

                    })
                }


        </View>





        </View>
    )
}




const styles = StyleSheet.create({

    root:{

    },
    images :{
        height:250,
        resizeMode:'contain',
        margin:10

    },
    dots:{
        flexDirection:'row',
        justifyContent:'center'

    },
    dot:{

        width:10,
        height:10,
        borderRadius:25
        
    }
    
})

export default ImageCarousel

