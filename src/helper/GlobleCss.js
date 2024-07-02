import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const StylesGloble = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    },

    whitescreen:{
        backgroundColor:'white',
        height:"100%",
        width:"100%",
    },
    marginscreen:{
        marginLeft : 20,
        marginRight :20
    },
    font13400011D45:{
        fontSize:13,
        fontWeight :'400',
        color:'#011D45',
    },
    fon10300000000:{
        fontSize:10,fontWeight :'300',
        color :'#000000'
    },
    font20700000000:{
        fontSize:20,
        fontWeight:'700',
        color :'#000000'
    },
    fon15700FFFFFF:{
        fontSize:15,
        fontWeight:'700',
        color :'#FFFFFF'
    }
   
    
    


})