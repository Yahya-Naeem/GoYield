import { View ,Text, TextInput, Pressable } from 'react-native'
import AppStyles from '../../styles/Styles'

export default function Feedback() {
  return (
    <View style={[AppStyles.itemContainer,{gap:20}]}>
      <View style={[AppStyles.button]}>
          <Text style={[AppStyles.buttonText,{fontWeight:'bold'}]}>Feedback Form</Text>
      </View>
      <View style={[{width:'70%',gap:20},AppStyles.itemContainer]}>
        <TextInput
            style={[AppStyles.input,AppStyles.fontFamily]}
            //onChangeText={handleChange('password')}
            //onBlur={handleBlur('password')}
            // value={values.password}
            placeholder="Subject"
          />
          <TextInput
            style={[AppStyles.input,AppStyles.fontFamily,{borderRadius:25}]}
            //onChangeText={handleChange('password')}
            //onBlur={handleBlur('password')}
            // value={values.password}
            multiline={true}
            numberOfLines={10}
            placeholder="Write feedback here"
          />
      </View>
      <Pressable
      style={AppStyles.button}
      >
        <Text style={AppStyles.buttonText}>Submit</Text>
      </Pressable>
    </View>
    
  )
};
