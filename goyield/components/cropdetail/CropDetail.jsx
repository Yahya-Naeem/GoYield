import { View, Text } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const CropDetail = () => {
  const navigation = useNavigation();
  const cropDetails = {
      wheat: {
        average_min_temp: 8,
        average_max_temp: 24,
        min_rainfall: 0,
        humidity_min: 25
      } ,
      rice:{
        average_min_temp: 23,
        average_max_temp: 41,
        min_rainfall: 90,
        humidity_min: 18
      },
      sunFlower:{
        average_min_temp: 5,
        average_max_temp: 36,
        min_rainfall: 70,
        humidity_max: 90,
        humidity_min: 10
        },
    };

  const validateSchema = Yup.object().shape({
      crop: Yup.string().required('Required'),
    });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true); // Set isSubmitting to true when the form starts submitting
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <View style={{marginTop:165}}>
        <Formik
            initialValues={{ crop:'wheat'}}
            onSubmit={handleSubmit}
            validationSchema={validateSchema}
        >
        {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid }) => (
            <View style = {{gap:20}}>
                {/** Crop */}
                <View style={[AppStyles.itemContainer]}>
                    {/* <Text style={[AppStyles.fontFamily,{fontSize:17},{alignSelf:'flex-start'},{paddingLeft: 50},]}>Select a language: </Text> */}
                    <View style={[AppStyles.dropdown,AppStyles.fontFamily]}>
                    <Picker
                        selectedValue={values.crop}
                        onValueChange={(itemValue) => {
                            handleChange('crop')(itemValue); // Correctly pass the new value to handleChange
                        }}
                        onBlur={handleBlur('crop')}
                        value={values.crop}
                    >
                        <Picker.Item label="Rice" value="rice"/>
                        <Picker.Item label="Wheat" value="wheat"/>
                        <Picker.Item label="Sun Flower" value="sunFlower"/>
                    </Picker>
                    </View>
                </View>               

                <View style={[AppStyles.itemContainer]}>
                <View style={[AppStyles.itemContainer,{backgroundColor:'white',width:'85%',height:'80%',borderRadius:25,justifyContent:'center'}]}>
                  <Text style={AppStyles.rowText}>
                        Minimum Temprature : {cropDetails[values.crop]['average_min_temp']}&deg;C
                  </Text>
                  <Text style={AppStyles.rowText}>
                        Maximum Temprature : {cropDetails[values.crop]['average_max_temp']}&deg;C
                  </Text>
                  <Text style={AppStyles.rowText}>
                        Minimum Rainfall Required : {cropDetails[values.crop]['min_rainfall']}mm
                  </Text>
                  <Text style={AppStyles.rowText}>
                        Maximum Humidity :{cropDetails[values.crop]['humidity_max']}%
                  </Text>
                  <Text style={AppStyles.rowText}>
                        Minimum Humidity :{cropDetails[values.crop]['humidity_min']}%
                  </Text>
                </View>
                </View>
            </View>
        )}
        </Formik>
        </View>
  );
};

export default CropDetail;
