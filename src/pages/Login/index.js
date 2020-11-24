import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ImgBgLogin} from '../../assets';
import {colors} from '../../utils';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Button, Gap, Input} from '../../components/atoms';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 350,
      }}>
      <View
        style={{
          height: 3,
          width: '50%',
          backgroundColor: colors.primary,
          alignSelf: 'center',
          borderRadius: 20,
        }}></View>
      <Gap height={8} />
      <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '600'}}>
        Login with your account
      </Text>
      <Gap height={30} />
      <Input label="Email" placeholder="Enter your email" />
      <Gap height={10} />
      <Input label="Password" placeholder="Enter your password" />
      <Gap height={35} />
      <Button title="Login" onPress={() => navigation.replace('UserHome')} />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <ImageBackground
        source={ImgBgLogin}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}>
        <View>
          <Text style={styles.titlePage}>Login</Text>
        </View>
      </ImageBackground>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[55, 350]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  content: {
    padding: 20,
  },
  titlePage: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
});