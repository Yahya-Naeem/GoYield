import { Button, TextInput, View, Text, Pressable } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const ScheduleCrops = () => {
  const navigation = useNavigation();
    const validateSchema = Yup.object().shape({
      region: Yup.string().required('Required'),
      crop: Yup.string().required('Required'),
    });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true); // Set isSubmitting to true when the form starts submitting
      console.log('clicked');
      // Perform additional actions with the form values here
      const p = new Promise(resolve => setTimeout(resolve, 3000));
      await p;
      console.log(values); // Logs the form values
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <View>
        <Formik
            initialValues={{ region: '', crop:''}}
            onSubmit={handleSubmit}
            validationSchema={validateSchema}
        >
        {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
            <View style = {{gap:20}}>
                {/** Region */}
                <View style={[AppStyles.itemContainer]}>
                    <Text style={[AppStyles.fontFamily,{fontSize:17},{alignSelf:'flex-start'},{paddingLeft: 50},]}>Select a language: </Text>
                    <View style={[AppStyles.dropdown,AppStyles.fontFamily]}>
                        <Picker
                            selectedValue={'none'}
                            onValueChange={handleChange('region')}
                            onBlur={handleBlur('region')}
                            value={values.region}
                            placeholder='Select region form dropdown'
                        >
                            {values.region === '' && (
                                <Picker.Item label="Select region form dropdown" value="" />
                            )}
                            <Picker.Item label="opt1" value="opt2"/>
                            <Picker.Item label="opt2" value="opt1"/>
                        </Picker>
                    </View>

                    <View style={{ width:'80%',alignItems:'flex-start'}}>
                        {touched.region && errors.region && <Text style={AppStyles.inputError}>{errors.region}</Text>}
                    </View>
                </View>
                {/** Crop */}
                <View style={[AppStyles.itemContainer]}>
                    <Text style={[AppStyles.fontFamily,{fontSize:17},{alignSelf:'flex-start'},{paddingLeft: 50},]}>Select a language: </Text>
                    <View style={[AppStyles.dropdown,AppStyles.fontFamily]}>
                        <Picker
                            selectedValue={'none'}
                            onValueChange={handleChange('crop')}
                            onBlur={handleBlur('crop')}
                            value={values.crop}
                            placeholder='Select region form dropdown'
                        >
                            {values.crop === '' && (
                                <Picker.Item label="Select crop form dropdown" value="" />
                            )}
                            <Picker.Item label="opt1" value="opt2"/>
                            <Picker.Item label="opt2" value="opt1"/>
                        </Picker>
                    </View>

                    <View style={{ width:'80%',alignItems:'flex-start'}}>
                        {touched.crop && errors.crop && <Text style={AppStyles.inputError}>{errors.crop}</Text>}
                    </View>
                </View>               


                <View style={AppStyles.itemContainer}>
                    <Pressable
                        onPress={handleSubmit}
                        disabled={isSubmitting || !isValid} // Disable the button when isSubmitting or form is invalid
                        style={[AppStyles.button,{marginTop:86}]}
                        >
                        <Text style={[{fontFamily:'Poppins Bold'} , AppStyles.buttonText]}>
                            {isSubmitting ? 'Searching...' : 'Schedule'}
                        </Text>
                    </Pressable>
                </View>
            </View>
        )}
        </Formik>
        </View>
  );
};

export default ScheduleCrops;