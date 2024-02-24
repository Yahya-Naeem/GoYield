import React from 'react';
import { TextInput, View, Text, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
export default function SignUp (){
  const navigation = useNavigation();
  const validateSchema = Yup.object().shape({
    name: Yup.string().required("enter name"),
    email: Yup.string().email().required("enter email"),
    password: Yup.string().required("enter password"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "password must match"),
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
    } 
    catch (error) {
      console.error('Error submitting form:', error);
    } 
    finally {
      setSubmitting(false); // Set isSubmitting to false when submission is complete
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
        <View style={{gap:20}}>
          <View style={[AppStyles.itemContainer]}>
            <TextInput
            style={[AppStyles.input,AppStyles.fontFamily]}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Username"
            />
            <View style={{ width:'80%',alignItems:'flex-start'}}>
            {touched.name && errors.name && <Text style={AppStyles.inputError}>{errors.name}</Text>}
            </View>
          </View>

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

          <View style={AppStyles.itemContainer}>
            <TextInput
            style={[AppStyles.input,AppStyles.fontFamily]}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry={true}
            />
            <View style={{ width:'80%',alignItems:'flex-start'}}>
            {touched.password && errors.password && <Text style={AppStyles.inputError}>{errors.password}</Text>}
            </View>
          </View>

          <View style={AppStyles.itemContainer}>
            <TextInput
            style={[AppStyles.input,AppStyles.fontFamily]}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Re-enter Password"
              secureTextEntry={true}
            />
            <View style={{ width:'80%',alignItems:'flex-start'}}>
              {touched.confirmPassword && errors.confirmPassword && <Text style={AppStyles.inputError}>{errors.confirmPassword}</Text>}
            </View>
          </View>

          <View style={AppStyles.itemContainer}>
            <Pressable
              onPress={handleSubmit}
              disabled={isSubmitting || !isValid} // Disable the button when isSubmitting or form is invalid
              style={AppStyles.button}
            >
              <Text style={[{fontFamily:'Poppins Bold'} , AppStyles.buttonText]}>
                {isSubmitting ? 'Signing up...' : 'SignUp'}
              </Text>
            </Pressable>
          </View>

          <View style={AppStyles.itemContainer}>
          <Text style={[AppStyles.fontFamily,{fontSize:17}]}> Already have an Account? <Text  
          style={{fontFamily:'Poppins Bold',color:'#1C5739',}}
          onPress={() => navigation.navigate('Signin')}
          >Sign in
          </Text></Text>
          </View>
        </View>
      )}
    </Formik>
  );
};
