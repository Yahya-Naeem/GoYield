import { View ,Text, TextInput, Pressable } from 'react-native'
import AppStyles from '../../styles/Styles';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Feedback() {
  const [subject, setSubject] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitting,setSubmitting] = useState(false);
  const handleFeedback = async() =>{
    setSubmitting(true);
    const user = auth().currentUser;
    try{
      const { email, uid } = user;
      const feedbackData = {
        email: email,
        userId: uid,
        subject: subject,
        feedback: feedback
    };
    await firestore().collection('feedback').add(feedbackData);
    alert('Thanks for submitting feedback,We will get back to you soon .');
    }
    catch(error){
      alert('Error Submitting form');
    }
    finally{
        setSubject('');
        setFeedback('');
        setSubmitting(false);
    }
  }
  return (
    <View style={[AppStyles.itemContainer,{gap:20,marginTop:100}]}>
      <View style={[AppStyles.button]}>
          <Text style={[AppStyles.buttonText,{fontWeight:'bold'}]}>Feedback Form</Text>
      </View>
      <View style={[{width:'70%',gap:20},AppStyles.itemContainer]}>
        <TextInput
            style={[AppStyles.input,AppStyles.fontFamily]}
            onChangeText={text => setSubject(text)}
            //onBlur={handleBlur('password')}
            value={subject}
            placeholder="Subject"
          />
          <TextInput
            style={[AppStyles.input,AppStyles.fontFamily,{borderRadius:25}]}
            onChangeText={text => setFeedback(text)}
            //onBlur={handleBlur('password')}
            value={feedback}
            multiline={true}
            numberOfLines={15}
            placeholder="Write feedback here"
          />
      </View>
      <Pressable
      style={AppStyles.button}
      onPress = {handleFeedback}
      disabled={!feedback.trim() && !subject.trim() && submitting}
      >
        <Text style={AppStyles.buttonText}>Submit</Text>
      </Pressable>

    </View>
    
  )
};
