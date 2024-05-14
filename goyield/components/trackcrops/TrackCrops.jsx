import React, { useEffect ,useState} from 'react';
import { Button, TextInput, View, Text, Pressable ,Dimensions} from 'react-native';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { TrackCropsIcon } from '../../assets/svgs';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import User from '../../state/User';
export default function TrackCrops() {
  const navigation = useNavigation();
  const [schedules,setSchedules] = useState([]); //stores all user data 
  const fetchSchedules = async () => {
    const userCred = auth().currentUser;
    try{
      if(userCred){
        const tempData = await firestore().collection('users').doc(userCred.uid).get();
        Object.assign(User,tempData.data());
        Object.keys(User.selectedSchedules).forEach((collectionName)=>{
          const docIds = User.selectedSchedules[collectionName];
          if(Array.isArray(docIds) && docIds.length > 0){
            docIds.forEach(async(id) => {
              const doc = await firestore().collection(collectionName).doc(id).get();
              const temp = doc.data();
              temp['id'] = id;
              temp['collectionName'] = collectionName;
              setSchedules(prevState => [...prevState,temp])
            });
          }
        });
      }
      else{
        alert('Error fetching data');
      }
    }
    catch(error){
      alert('Error fetching data, check internet connection or try again later');
    }
  };
  useEffect(()=>{
    if(schedules.length === 0){
      fetchSchedules();
    }
  },[])

  const validateSchema = Yup.object().shape({
    schedule: Yup.object().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      // Pass the selected values to the trackDetails screen
      navigation.navigate('trackDetails', { schedule: values.schedule });
      console.log(values);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
  const { height: windowHeight, width: windowWidth } = Dimensions.get('window'); // Get screen dimensions
  return (
    <View>
      <Formik
        initialValues={{ schedule: {}}}
        onSubmit={handleSubmit}
        //validationSchema={validateSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, resetForm, values, errors, touched, isSubmitting, isValid,setFieldValue }) => (
          <View style={{ gap: 20 }}>
            <View style={[AppStyles.itemContainer,{marginTop:'30%'}]}>
              <TrackCropsIcon height={windowHeight*0.25} width={windowWidth*1}/>
            </View>
            {/* Schedule Picker */}
            <View style={[AppStyles.itemContainer]}>
              <View style={[AppStyles.dropdown, AppStyles.fontFamily]}>
                <Picker
                  selectedValue={values.schedule}
                  onValueChange={(itemValue) => {
                      setFieldValue('schedule', itemValue);
                  }}
                  onBlur={() => handleBlur('schedule')}
                  value={values.schedule}
                  placeholder='Select schedule from dropdown'
                >
                  {/* Make the first item not selectable */}
                  <Picker.Item label={schedules.length >= 1 ?"Select schedule from dropdown":'No Schedules to show'} value="" disabled />
                  {schedules.map((sch,index) => (
                    <Picker.Item 
                      key={index} 
                      label={`${sch['collectionName']?.split('_')[1]} ${sch.Planting_dates}`} 
                      value={sch} 
                  />
                  ))
                  }                  
                </Picker>
              </View>

              <View style={{ width: '80%', alignItems: 'flex-start' }}>
                {touched.schedule && errors.schedule && <Text style={AppStyles.inputError}>{errors.schedule}</Text>}
              </View>
            </View>

            <View style={AppStyles.itemContainer}>
              <Pressable
                onPress={handleSubmit}
                disabled={isSubmitting ||!isValid}
                style={[AppStyles.button, { marginTop: 86 }]}
              >
                <Text style={[{ fontFamily: 'Poppins Bold' }, AppStyles.buttonText]}>
                  {isSubmitting? 'Loading' : 'Track Schedule'}
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
