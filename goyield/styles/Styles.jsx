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
        color:'#000000',
        fontFamily:'Poppins Light',
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