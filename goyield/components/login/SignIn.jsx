import { Button, TextInput, View, Text, Pressable } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const validateSchema = Yup.object().shape({
    userId: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
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
      <Formik
      initialValues={{ userId: '', password: '' }}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
      >
      {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
        <View style={{gap:20}}>
          {/**Id */}
          
          <View style={[AppStyles.itemContainer]}>
            <TextInput
              style={[AppStyles.input,AppStyles.fontFamily]}
              onChangeText={handleChange('userId')}
              onBlur={handleBlur('userId')}
              value={values.userId}
              placeholder="Enter User ID"
            />
            <View style={{ width:'80%',alignItems:'flex-start'}}>
              {touched.userId && errors.userId && <Text style={AppStyles.inputError}>{errors.userId}</Text>}
            </View>
          </View>
            {/**Password */}
          <View style={[AppStyles.itemContainer]}>
            <TextInput
              style={[AppStyles.input,AppStyles.fontFamily]}
              placeholderStyle
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Enter Password"
              secureTextEntry={true}
            />
            <View style={{ width:'80%',alignItems:'flex-start'}}>
              {touched.userId && errors.userId && <Text style={AppStyles.inputError}>{errors.userId}</Text>}
            </View>
          </View>
          {/**Button */}
          <View style={AppStyles.itemContainer}>
            <Pressable
              onPress={handleSubmit}
              disabled={isSubmitting || !isValid} // Disable the button when isSubmitting or form is invalid
              style={[AppStyles.button,{marginTop:86}]}
            >
              <Text style={[{fontFamily:'Poppins Bold'} , AppStyles.buttonText]}>
                {isSubmitting ? 'Logging In...' : 'Login'}
              </Text>
            </Pressable>
            
          </View>
          <View style={AppStyles.itemContainer}>
          <Text style={[AppStyles.fontFamily,{fontSize:17}]}> 
          Don't have an Account? 
          <Text  
          style={{fontFamily:'Poppins Bold',color:'#1C5739',}}
          onPress={() => navigation.navigate('Signup')}
          > Sign up
          </Text>
          </Text>
          </View>

        </View>
      )}
    </Formik>
  );
};

export default SignIn;