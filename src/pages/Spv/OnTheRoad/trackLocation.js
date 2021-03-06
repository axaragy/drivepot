import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Button, Gap, Header, Input} from '../../../components';
import {colors} from '../../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Ic_calender, Ic_pin, Ic_time, ImgMapSample} from '../../../assets';
import {UserOrderSetLocation} from '../..';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const trackLocation = ({navigation}) => {
  // date picker
  const [date2, setDate2] = useState('DD-MM-YYYY');
  const [time2, setTime2] = useState('08:00');
  const [time, setTime] = useState('08:00');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const currentTime = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let date_ob = currentDate;
    let dt = ('0' + date_ob.getDate()).slice(-2);
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let result = dt + '/' + month + '/' + year;

    let time_ob = currentTime;
    let timeRes =
      time_ob.getHours() +
      ':' +
      time_ob.getMinutes() +
      ':' +
      time_ob.getSeconds();
    setDate2(result);
    setTime2(timeRes);
    // setForm('tanggal', result);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  // end date picker

  const openLocation = () => {
    setShowLocation(true);
  };

  const renderContent = () => (
    <View style={styles.wrapperRenderContent}>
      <View style={styles.separatorSwipe}></View>
      <Gap height={4} />
      <Text style={styles.titleFormLogin}>Location</Text>
      <Gap height={10} />
      <Input
        label="Current Location"
        placeholder="Jln Mas Prada, Grogol Utara, Kebayoran Lama, Jakarta Selatan"
      />
      <Gap height={10} />
      <Input label="Passenger" placeholder="Claudia Anjani" />
      <Gap height={10} />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <ImageBackground style={styles.page} source={ImgMapSample}>
      <Header type="transparent" onPress={() => navigation.goBack()} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[150, 400]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </ImageBackground>
  );
};

export default trackLocation;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  imgMap: {
    resizeMode: 'cover',
    height: '100%',
  },
  wrapperRenderContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 400,
  },
  separatorSwipe: {
    height: 5,
    width: '30%',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    borderRadius: 20,
  },
  titleFormLogin: {textAlign: 'center', fontSize: 18, fontWeight: '600'},
});
