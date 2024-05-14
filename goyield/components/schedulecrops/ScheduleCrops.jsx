import { Button, TextInput, View, Text, Pressable } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
const ScheduleCrops = () => {
  const navigation = useNavigation();
    const validateSchema = Yup.object().shape({
      region: Yup.string().required('Required'),
      crop: Yup.string().required('Required'),
    });
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
        setSubmitting(true);
        const collectionName = [values.region,values.crop].join('_');
        const collectionRef = firestore().collection(collectionName);
        const snapshot = await collectionRef.get();
        const schedules = snapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }));
        navigation.navigate('SearchSchedule',{schedules:schedules,collectionName:collectionName});
    } 
    catch (error) {
        console.error('Error submitting form:', error);
    } finally {
        resetForm();
        setSubmitting(false);
    }
  };
  return (
    <View>
        <Formik
            initialValues={{ region: 'dgk', crop:'sunflower'}}
            onSubmit={handleSubmit}
            validationSchema={validateSchema}
        >
        {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
            <View style = {{gap:20}}>
                {/** Region */}
                <View style={[AppStyles.itemContainer]}>
                    <View style={[AppStyles.dropdown]}>
                        <Picker
                            selectedValue={values.region}
                            onValueChange={(itemValue) => {handleChange('region')(itemValue)}}
                            onBlur={handleBlur('region')}
                            value={values.region}
                            placeholder='Select region form dropdown'
                        >
                            <Picker.Item label="Dera Ghazi Khan" value="dgk"/>
                            <Picker.Item label="BahawalPur" value="bwl"/>
                            <Picker.Item label="Lahore" value="lahore"/>
                            <Picker.Item label="Faisalabad" value="faisalabad"/>
                            <Picker.Item label="Gujranwala" value="gujranwala"/>
                            <Picker.Item label="Gujrat" value="gujrat"/>
                        </Picker>
                    </View>
                    <View style={{ width:'80%',alignItems:'flex-start'}}>
                        {touched.region && errors.region && <Text style={AppStyles.inputError}>{errors.region}</Text>}
                    </View>
                </View>
                {/** Crop */}
                <View style={[AppStyles.itemContainer]}>
                    {/* <Text style={[AppStyles.fontFamily,{fontSize:17},{alignSelf:'flex-start'},{paddingLeft: 50},]}>Select a language: </Text> */}
                    <View style={[AppStyles.dropdown,AppStyles.fontFamily]}>
                        <Picker
                            selectedValue={values.crop}
                            onValueChange={(itemValue)=>{handleChange('crop')(itemValue)}}
                            onBlur={handleBlur('crop')}
                            value={values.crop}
                            placeholder='Select region form dropdown'
                        >
                            <Picker.Item label="Sunflower" value="sunflower"/>
                            <Picker.Item label="Rice" value="rice"/>
                            <Picker.Item label="Wheat" value="wheat"/>
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
                            {isSubmitting ? 'Searching...' : 'Search'}
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