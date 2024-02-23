import { StyleSheet } from 'react-native'

const AppStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    fontFamily:{
        fontFamily:'Poppins',
    },
    inputContainer:{
        marginRight:54,
        marginLeft:54,
    },
    input:{
        marginBottom:17,
        flex:1,
        fontSize:15,
        fontWeight:300,
        paddingTop:14,
        paddingBottom:14,
        paddingHorizontal:23,
        color:'#000000'
    },
    button:{
        backgroundColor:'#1C5739',
        height:60,
        width:287,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'#fff',
        fontWeight:700,
        fontSize:28,
    },

});
export default AppStyles;