import { StyleSheet } from 'react-native'

const AppStyles = StyleSheet.create({
    container:{
        backgroundColor:'#e7f2eb',
        justifyContent:'center' ,
        flex:1,
    },
    background:{
        flex:1,
        backgroundColor:'#e7f2eb',
    },
    itemContainer:{
        alignItems:'center',
    },
    fontFamily:{
        fontFamily:'Poppins Light',
        color:'#000000',
    },
    input:{
        fontSize:15,
        paddingTop:14,
        paddingBottom:13,
        paddingHorizontal:23,
        color:'#000000',
        backgroundColor:'#fff',
        borderRadius:100,
        width:'85%'
    },
    button:{
        backgroundColor:'#1C5739',
        height:60,
        width:287,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:28,
    },
    inputError:{
        color:'red',
    }
});
export default AppStyles;