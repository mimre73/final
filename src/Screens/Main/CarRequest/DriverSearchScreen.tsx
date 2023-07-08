import {
  Center,
  CloseIcon,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import LogoSvg from '../../../Components/IconComponents/Logo';
import {MoreCircle} from 'react-native-iconly';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../Constants/Images';
import SlideToCancel from '../../../Components/SlideToCancel';

function DriverSearchScreen(): JSX.Element {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1}>
        <VStack
          height="100%"
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          zIndex={2}>
          <HStack py={3} alignItems="center" space={2}>
            <IconButton icon={<LogoSvg />} borderRadius="full" />
            <MoreCircle set="curved" color="black" />
            <Heading ml={4} fontWeight={700} fontSize={24}>
              {t('driverSearch.title')}
            </Heading>
          </HStack>
          <Center>
            <Image source={Images.inbox.taxi} alt="taxi" />
            <Text fontWeight={700} fontSize={20}>
              {t('driverSearch.searching')}
            </Text>
            <Text fontWeight={500} fontSize={18} color="#616161">
              {t('driverSearch.desc')}
            </Text>
          </Center>

          <VStack flex={1} height="100%" position="relative">
            <Center>
              <Image
                source={Images.driverLoading.loading}
                resizeMode="contain"
                width="80%"
                alt="loading"
              />
            </Center>
          </VStack>
        </VStack>
        <SlideToCancel
          onEndReached={() => {
            // navigation.navigate('DriverArriving');
          }}
          containerStyle={styles.slider}
          sliderElement={
            <IconButton
              bg="primary.200"
              icon={<CloseIcon size={4} color="#000" set="light" />}
              borderRadius="full"
            />
          }>
          <Text>{`>> ${t('driverSearch.cancel')} `}</Text>
        </SlideToCancel>
        {/* <Mapbox.MapView
          scaleBarEnabled={false}
          logoEnabled={false}
          attributionEnabled={false}
          styleURL="mapbox://styles/mimre/ckufb40p49yir19ns8pkseqfz"
          style={styles.mapRoot}>
          <Mapbox.Camera followZoomLevel={16} followUserLocation />
        </Mapbox.MapView> */}
        <LinearGradient
          colors={['#ffffff', '#ffffff00']}
          style={styles.overlay}
        />
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  mapRoot: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
  },
  slider: {
    margin: 8,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 200,
    overflow: 'hidden',
    zIndex: 8888,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
});
export default DriverSearchScreen;
