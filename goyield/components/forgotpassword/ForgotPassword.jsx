import { Button, TextInput, View, Text, Pressable } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const validateSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      const email = values.email;
      await auth().sendPasswordResetEmail(email);
      console.log('Password reset email sent successfully');
      alert('A password reset link has been sent to your email.');
      resetForm();
    } catch (error) {
      console.error("Failed to send password reset email", error);
      alert("Failed to send password reset email. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <Formik
      initialValues={{ email: ''}}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
      >
      {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
        <View style={{gap:20}}>
          {/**Id */}
          
          <View style={[AppStyles.itemContainer]}>
            <TextInput
              style={[AppStyles.input,AppStyles.fontFamily]}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            <View style={{ width:'80%',alignItems:'flex-start'}}>
              {touched.email && errors.email && <Text style={AppStyles.inputError}>{errors.email}</Text>}
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
                {isSubmitting ? 'Resetting password...' : 'Reset Password'}
              </Text>
            </Pressable>
          </View>


          <View style={AppStyles.itemContainer}>
            <Text style={[AppStyles.fontFamily,{fontSize:17}]}> 
              GO back to 
              <Text  
                style={{fontFamily:'Poppins Bold',color:'#1C5739',}}
                onPress={() => navigation.navigate('Signup')}
              > 
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ForgotPassword;