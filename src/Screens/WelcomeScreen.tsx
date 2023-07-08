import React from 'react';
import {VStack, Heading, Text, Button} from 'native-base';
import {StyleSheet, ImageBackground, StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';
import {version} from '../../package.json';
import useWelcomeController from '../ViewControllers/useWelcomeController';
import Images from '../Constants/Images';

function WelcomeScreen(): JSX.Element {
  const {t} = useTranslation();
  const {getStartedOnPress} = useWelcomeController();

  return (
    <ImageBackground
      style={styles.container}
      source={Images.welcome.background}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <VStack pb={5} px={5}>
        <Heading size="2xl" fontWeight={700} color="white">
          {t('welcome.welcomeTo')}
        </Heading>
        <Heading size="4xl" fontWeight={900} color="primary.500">
          {t('welcome.fidaRide')}
        </Heading>
        <Button onPress={getStartedOnPress} mt={2}>
          {t('welcome.getStarted')}
        </Button>
        <Text mt={6} color="white" fontSize={16} textAlign="center">
          {t('welcome.description')}
        </Text>
        <Text mt={6} color="white" fontSize={10} textAlign="center">
          {t('welcome.version', {val: version})}
        </Text>
      </VStack>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
