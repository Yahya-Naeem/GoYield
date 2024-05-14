import React,{useState} from 'react';
import { TextInput, View, Text, Pressable} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import User from '../../state/User.js';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUp (){
  const navigation = useNavigation();
  const [passwordVisibility,setPasswordVisibility] = useState(false);
  const [passwordVisibility2,setPasswordVisibility2] = useState(false);
  const validateSchema = Yup.object().shape({
    name: Yup.string().required("Enter name"),
    email: Yup.string().email().required("Enter email"),
    //password <50 && password >= 8 , must have a special chracter , digit and alphabet
    password: Yup.string()
    .required("Enter password")
    .min(8,'Password must be of atleast 8 chracters')
    .max(50, "Password must be at most 50 characters")
    .test(  
      'password',
      "Password must contain at least one symbol, one number, and one alphabet",
      function(value){
        return(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value) &&
          /\d/.test(value) &&
          /[a-zA-Z]/.test(value)
        );
      }
    ),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  async function signUpWithEmailAndPassword(email, password , name) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await user.sendEmailVerification();
      User.email = email ;
      User.name = name ;
      await firestore().collection('users').doc(user.uid).set(User);
      alert('Please verify email');
    } 
    catch (error) {
      console.error('Error signing up:', error);
      alert('Error Signing Up . Please try again');
    }
    finally{
      await auth().signOut();
    }
  }

  const handleSubmit = async (values, { setSubmitting, resetForm, setFieldError }) => {
    try {
      setSubmitting(true); // Set isSubmitting to true when the form starts submitting
      signUpWithEmailAndPassword(values.email,values.password,values.name); 
   }
    catch (error) {
      console.error('Error submitting form:', error);
    } 
    finally {
      resetForm();
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

          <View style={AppStyles.itemContainer}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:'85%',backgroundColor:'#fff',borderRadius:100,paddingRight:'3%'}}>
              <TextInput
                style={[AppStyles.input,AppStyles.fontFamily,{width:'85%'}]}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                placeholder="Re-enter Password"
                secureTextEntry={!passwordVisibility2}
              />
              <Pressable
              onPress={()=>{
                setPasswordVisibility2(!passwordVisibility2);
              }}
              >
              <Icon name={passwordVisibility2 ? 'eye' : 'eye-slash'} size={30} color="black" />
              </Pressable>
            </View>
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
