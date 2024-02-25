
import {View , Text ,Pressable} from 'react-native';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    
  return (
    <View style={{flex:1,gap:20}}>
        <View style={[AppStyles.itemContainer,{paddingHorizontal:(27*2)}]}>
            <Text style={[AppStyles.fontFamily,{fontSize:18 ,textAlign:'center'}]}>
                Cultivating maximum crop potential at your fingure prints
            </Text>
        </View>
        <View style={[AppStyles.itemContainer]}>
        <Pressable
        style={[AppStyles.button,{marginTop:96}]}
        onPress={()=>{navigation.navigate('InnerNavigator')}}
        >
            <Text style={[AppStyles.buttonText,{fontFamily:'Poppins Bold'}]}>Get Started</Text>
        </Pressable>
        </View>
    </View>

  )
}
