import { StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    page:{
        padding:10

    },

    root:{
        flexDirection:'row',
        
        borderWidth:1,
        borderColor:'#D1D1D1',
        borderRadius:10,
        backgroundColor:`#fff`,
        marginVertical:5
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

export default styles;