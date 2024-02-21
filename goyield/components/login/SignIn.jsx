import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik,Form,Field } from 'formik';
import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
  userId:Yup.string()
  .matches(/^.{6}$/, 'Must be exactly 6 characters')
  .required('Required'),
  password:Yup.string().require('Required')
})

const SignIn = () => {
  return (
    <Formik
      initialValues={{ userId: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <div>
            <label htmlFor="userId">User ID</label>
            <Field type="text" id="userId" name="userId" />
            <ErrorMessage name="userId" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting || !isValid}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SignIn;
