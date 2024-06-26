import React from 'react'
import { View,Text } from 'react-native'
import AppStyles from '../../styles/Styles';
import { EllipseIcon, TopEllipseIcon, WelcomeIcon } from '../../assets/svgs/index.js';
import ScheduleCrops from '../../components/schedulecrops/ScheduleCrops.jsx';
import DatePicker from '../../assets/svgs/DatePicker';
import SearchSchedule from '../../components/schedulecrops/SearchSchedule.jsx';
function ScheduleCropsScreen({component:Component,route}) {
  const schedules = route.name === 'SearchSchedule' ? route.params.schedules : [];
  const collectionName = route.name === 'SearchSchedule' || route.name === 'ScheduleDetail'? route.params.collectionName : '';
  const schedule = route.name === 'ScheduleDetail' ? route.params.schedule : {};
  return (
    <View style={AppStyles.container}>
      <View style={{position:'absolute',top:-20,left:0}}>
          <TopEllipseIcon width={165} height={165} />
      </View>
      <View style={{position:'absolute',left:-20,top:0}}>
              <EllipseIcon width={165} height={165} />
      </View>
      <Component schedules={schedules} collectionName={collectionName} schedule={schedule}/>
    </View>
  )
}

export default ScheduleCropsScreen;