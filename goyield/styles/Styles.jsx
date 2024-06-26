import { StyleSheet } from 'react-native'
import {Dimensions} from 'react-native';

windowWidth = Dimensions.get('window').width * 0.33 ;

const AppStyles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#e7f2eb',
    },
    container:{
        backgroundColor:'#e7f2eb',
        justifyContent:'center' ,
        flex:1,
    },
    row:{
        flexDirection:'row' ,
        justifyContent:'center',
        gap:20,
    },
    rowItem:{
        gap:10,
        height:windowWidth,      //Screen width
        width:windowWidth ,       //screen width adjusted height
        backgroundColor:'#cddbd3',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
    },
    rowText:{
        fontSize:17,
        color:'#000',
        fontFamily:'Poppins Light',
    },
    itemContainer:{
        alignItems:'center',
    },
    clrText:{
        color:'#1C5739',
    },
    fontFamily:{
        fontFamily:'Poppins Light',
        color:'#000000',
        fontSize:15,
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
    dropdown:{
        fontSize:15,
        //paddingTop:12,
        //paddingBottom:11,
        //paddingLeft:17,
        backgroundColor:'#fff',
        borderRadius:100,
        width:'85%',
        height:'260px'
    },
    button:{
        backgroundColor:'#1C5739',
        height:60,
        width:287,
        alignItems:'center',
        justifyContent:'center',
    },

    index:{
        backgroundColor:'#1C5739',
        height: 39,
        width: 37,
        borderRadius:100,
    },
    displayOption:{
        backgroundColor:'#fff',
        paddingHorizontal:29,
        paddingVertical:7,
        flexDirection:'row',
        borderRadius:25,
        width:'100%',
        justifyContent:'space-between' ,
        alignItems:'center',
        marginBottom:10
    },
    buttonText:{
        color:'#fff',
        fontSize:28,
        fontWeight:'bold',
    },
    inputError:{
        color:'red',
    },
    instructionContainer:{
        backgroundColor:'#fff',
        height:'70%',
        width:'80%',
        borderRadius:25,
    }

});
export default AppStyles;