import { View ,Text,SectionList  } from 'react-native'
import AppStyles from '../../styles/Styles';

  const sections = [
    {
      title: 'Getting Started',
      data: [
        {
          title: 'Creating an Account',
          steps: [
            'Open the GoYield application on your device',
            'Tap on the “Get Started” button.',
            'Select the “Sign Up” text located on the bottom right of the login screen.',
            'Enter your full name, email address, and desired password in the provided fields.',
            'Tap on the "Register" button.',
            'An email will be sent to the provided email address for verification.',
            'Check your email inbox for a verification message from GoYield.',
            'Click on the verification link in the email to verify your account.',
            'Once verified, you can log in to your GoYield account using your email and password (Refer to section 1.2 for details).',
          ]
        },
        {
          title: 'Logging In',
          steps: [
            'Open the GoYield application on your device.',
            'Tap on the “Get Started” button.',
            'Enter your user id and password in the provided fields.',
            'Tap on the "Login" button to access your GoYield account.'
          ]
        },
      ]
    },
    {
      title: 'Main Features',
      data: [
        {
          title: 'Selecting Optimal Planting Dates',
          steps: [
            'Login to your account .',
            'Tap on the “Schedule” button located on the top left corner.',
            'Choose the region for which you want to find optimal planting dates, by tapping on the downward arrow located towards the right of the “Select Region” text.',
            'After tapping on the downward arrow next to "Select Region," a list of available regions will appear.',
            'Scroll through the list to find your specific region, then tap on it to select.',
            'Choose the crop for which you want to find optimal planting dates, by tapping on the downward arrow located towards the right of the “Select Crop” text.',
            'After tapping on the downward arrow next to "Select Crop," a list of available crops will appear.',
            'Scroll through the list to find your desired crop, then tap on it to select.',
            'Click on the “Search” button',
            'A list of possible planting dates will appear on the screen, based on weather predictions and crop requirements.',
            'Select the desired planting date from the list.',
            'On the resultant screen you will be shown the details of the schedule.',
            'To add this date to your schedule, click on “Add to List”',
            'To go back to the options page, click on the left arrow located on the top left corner of the screen.',
            'To go back to the main page, click on the home icon located on the top left corner of the screen.'
          ]
        },
        {
          title: 'Viewing Schedule',
          steps: [
            'Login to your account .',
            'Tap on the “Track schedule” button located on the top right corner.',
            'On the screen that will appear, click on the downward arrow located on the right of the “Select Schedule”',
            'A list of your schedules will appear, select the one that you wish to track.',
            'You will be shown a screen with the planting date, and information on the weather.',
            'To remove it from your list:',
            'Select the “Remove From Schedule” button',
            'To go back to the options page, click on the left arrow located on the top left corner of the screen.',
            'To go back to the main page, click on the home icon located on the top left corner of the screen.'
          ]
        },
        {
          title: 'Viewing Crop Details',
          steps: [
            'Login to your account .',
            'Tap on the “Crop Details” button located on the mid-left of the screen.',
            'On the screen that will appear, click on the downward arrow located on the right of the “Select Crop”',
            'A list of all the available crops will appear, select the one that you wish to explore.',
            'The crop details will appear in the white box below the selection area.',
            'To go back to the main page, click on the home icon located on the top left corner of the screen.'
          ]
        },
      ]
    },
    {
      title: 'Feedback and Suggestions',
      data: [
        {
          title: 'Sending Feedback',
          steps: [
            'Login to your account .',
            'Tap on the “Feedback” button located on the mid-right of the screen.',
            'On the resultant screen you will be shown two boxes, one above the other.',
            'Type the subject of your query/feedback into the top box.',
            'Type your query/feedback in the bottom box.',
            'Click on “Submit” to send the feedback.',
            'Once submitted, our team will review your feedback.',
            'To go back to the main page, click on the home icon located on the top left corner of the screen'
          ]
        }
      ]
    },
    {
      title: 'Troubleshooting:',
      data: [
        {
          title: 'Video Tutorial',
          steps: [
            'Login to your account .',
            'Tap on the “Video Tutorial” button located on the bottom left corner.',
            'On the resultant screen a video will be displayed.',
            'To go back to the main page, click on the home icon located on the top left corner of the screen',
          ]
        },
        {
          title: 'Accessing User Manual',
          steps: [
            'Login to your account .',
            'Tap on the “User Manual” button located on the bottom right corner.',
            'On the resultant page you will be able to view the user manual.',
            'To go back to the main page, click on the home icon located on the top left corner of the screen.',
          ]
        }
      ]
    }
  ]
export default function UserManual() {
  const renderSectionHeader = ({ section }) => (
    <View style={AppStyles.sectionHeader}>
      <Text style={[AppStyles.buttonText,AppStyles.clrText]}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={[AppStyles.item,{borderRadius:25,padding:5}]}>
      <Text style={[AppStyles.rowText,{fontWeight:'bold',fontSize:24}]}>{item.title}</Text>
      <View>
        {item.steps.map((step, index) => (
          <Text key={index} style={[{marginBottom:15,fontSize:17,},AppStyles.rowText]}>{index+1}: {step}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={[AppStyles.itemContainer,{gap:20,marginTop:120}]}>
      <View style={AppStyles.button}>
          <Text style={AppStyles.buttonText}>
            User Manual 
          </Text>
      </View>
      <View style={[AppStyles.instructionContainer,{borderTopLeftRadius: 10,  // Adjust the value as needed
      borderBottomLeftRadius: 10,  // Adjust the value as needed
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      padding:5,
      height:'75%'}]}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    </View>
    
  );
}