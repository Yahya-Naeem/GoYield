import { Button, TextInput, View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignIn = () => {
  const navigation = useNavigation();
  const [passwordVisibility,setPasswordVisibility] = useState(false);
  const validateSchema = Yup.object().shape({
    email: Yup.string().email().required("Enter email"),
    password: Yup.string().required('Enter password'),
  });
const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    setSubmitting(true); // Set isSubmitting to true when the form starts submitting
    const userCredential = await auth().signInWithEmailAndPassword(values.email, values.password);
    const user = userCredential.user;
    // Check if email is verified
    if (!user.emailVerified) {
      // If email is not verified, sign out the user and display an error message
      await auth().signOut();
      alert('Your email address is not verified. Please verify your email and try again.');
      resetForm();
      return;
    }
    resetForm();
    navigation.navigate('InnerNavigation');
  }catch (error) {
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
      // Display error message to the user indicating invalid credentials
      alert('Invalid email or password. Please try again.');
    } else {
      // Display a generic error message for other authentication errors
      alert('An error occurred. Please try again later.',error);
    }
  }
};

  return (
      <Formik
      initialValues={{ email: '', password: '' }}
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
            {/**Password */}
          <View style={[AppStyles.itemContainer]}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'85%',backgroundColor:'#fff',borderRadius:100,paddingRight:'3%'}}>
              <TextInput
                style={[AppStyles.input,AppStyles.fontFamily,{width:'85%'}]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry={!passwordVisibility}
              />
              <Pressable
              onPress={()=>{
                setPasswordVisibility(!passwordVisibility);
              }}
              >
              <Icon name={passwordVisibility ? 'eye' : 'eye-slash'} size={30} color="black" />
              </Pressable>
            </View>
            <View style={{ width:'80%',alignItems:'flex-start'}}>
              {touched.password && errors.password && <Text style={AppStyles.inputError}>{errors.password}</Text>}
            </View>
          </View>
          <View style={{width:'90%'}}>
            <Text  
                style={[AppStyles.fontFamily,{alignSelf: 'flex-end', color:'#1C5739', textDecorationLine:'underline'}]}
                onPress={() => navigation.navigate('ForgotPassword')}
            >Forgot Password? 
            </Text>
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

