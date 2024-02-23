import React from 'react';
import { Button, TextInput, View, Text, Pressable } from 'react-native';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AppStyles from '../../styles/Styles';

const SignIn = () => {
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
      setSubmitting(false); // Set isSubmitting to false when submission is complete
    }
  };

  return (
    <Formik
      initialValues={{ userId: '', password: '' }}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
        <View>
          <View>
            <TextInput
              onChangeText={handleChange('userId')}
              onBlur={handleBlur('userId')}
              value={values.userId}
              placeholder="User ID"
            />
            {touched.userId && errors.userId && <Text>{errors.userId}</Text>}
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
          <View style={AppStyles.container}>
            <Pressable
              onPress={handleSubmit}
              disabled={isSubmitting || !isValid} // Disable the button when isSubmitting or form is invalid
              style={AppStyles.button}
            >
              <Text style={[AppStyles.fontFamily, AppStyles.buttonText]}>
                {isSubmitting ? 'Logging In...' : 'Login'}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
