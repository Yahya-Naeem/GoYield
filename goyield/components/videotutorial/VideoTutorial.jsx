import { View ,Text ,Dimensions} from 'react-native'
import Video from "react-native-video";
import firestore from "@react-native-firebase/firestore";
import AppStyles from '../../styles/Styles';

export default function VideoTutorial() {
  const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/goyield-c32c4.appspot.com/o/Screen_Recording_20240515_215443_goyield.mp4?alt=media&token=badc8055-7865-4cf9-844a-a176fc4b9cb7'
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
  return (
    <View style = {[AppStyles.itemContainer,{gap:10}]}>
      <View style={AppStyles.button}>
        <Text style = {AppStyles.buttonText}>Video Tutorial</Text>
      </View>
      <Video
        // source={require('../../assets/abc.mp4')}
        source = {{uri:videoUrl}}
        controls={true}
        resizeMode={"contain"}
        paused={false}
        repeat={true}
        style={{ width: 150, height: 300 }}
      />
    </View>
  )
}
