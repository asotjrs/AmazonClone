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
 

    ratingContainer:{
        flexDirection:'row',
        alignItems:'center'

    },
   
    





})

export default styles;