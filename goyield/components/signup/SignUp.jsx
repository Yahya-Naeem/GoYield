import React from 'react';
import { Button, TextInput, View, Text, Pressable, StyleSheet } from 'react-native';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const validateSchema = Yup.object().shape({
    userId: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
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
      setSubmitting(false); // Set isSubmitting to false when submission is complete
    }
  };

  return (
    <Formik
      initialValues={{ userId: '', email: '', password: '', confirm_password: '' }}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
        <View style={{gap:20}}>
          <View style={[AppStyles.itemContainer]}>
            <TextInput
              style={[AppStyles.input,AppStyles.fontFamily]}
              onChangeText={handleChange('userId')}
              onBlur={handleBlur('userId')}
              value={values.userId}
              placeholder="Enter your UserID"
            />
            <View style={{ width:'80%',alignItems:'flex-start'}}>
              {touched.userId && errors.userId && <Text>{errors.userId}</Text>}
            </View>
          </View>

          <View style={[AppStyles.itemContainer]}>
            <TextInput
              style={[AppStyles.input,AppStyles.fontFamily]}
              onChangeText={handleChange('Enter you email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}
          </View>

          <View>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry={true}
            />
            {touched.password && errors.password && <Text>{errors.password}</Text>}
          </View>

          <View>
            <TextInput
              onChangeText={handleChange('confirm_password')}
              onBlur={handleBlur('confirm_password')}
              value={values.confirm_password}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
            {touched.confirm_password && errors.confirm_password && <Text>{errors.confirm_password}</Text>}
          </View>

          <View style={AppStyles.container}>
            <Pressable
              onPress={handleSubmit}
              disabled={isSubmitting || !isValid} // Disable the button when isSubmitting or form is invalid
              style={AppStyles.button}
            >
              <Text style={[AppStyles.fontFamily, AppStyles.buttonText]}>
                {isSubmitting ? 'Signing up...' : 'SignUp'}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

const AppStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    fontFamily:{
        fontFamily:'Poppins',
    },
    inputContainer:{
        marginRight:54,
        marginLeft:54,
    },
    input:{
        marginBottom:17,
        flex:1,
        fontSize:15,
        fontWeight:300,
        paddingTop:14,
        paddingBottom:14,
        paddingHorizontal:23,
        color:'#000000'
    },
    button:{
        backgroundColor:'#1C5739',
        height:60,
        width:287,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        color:'#fff',
        fontWeight:700,
        fontSize:28,
    },

});

export default SignUp;
