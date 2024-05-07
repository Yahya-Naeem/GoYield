import { View ,Text } from 'react-native'
import AppStyles from '../../styles/Styles'

export default function UserManual() {
  return (
    <View style={[AppStyles.itemContainer,{gap:20,marginTop:120}]}>
      <View style={AppStyles.button}>
          <Text style={AppStyles.buttonText}>
            User Manual 
          </Text>
      </View>
      <View style={AppStyles.instructionContainer}>
        <Text style={[AppStyles.fontFamily,{textAlign:'center'}]}>
          Further instructions
        </Text>
      </View>
    </View>
  )
}
