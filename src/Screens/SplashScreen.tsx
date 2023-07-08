import React from 'react';
import {VStack, Image, Center, Spinner} from 'native-base';
import useSplashController from '../ViewControllers/useSplashController';
import Images from '../Constants/Images';

function SplashScreen(): JSX.Element {
  const {} = useSplashController();
  return (
    <VStack flex={1} backgroundColor={'white'}>
      <VStack flex={1} />
      <Center>
        <Image source={Images.splash.image} alt="Alternate Text" size="2xl" />
      </Center>

      <VStack justifyContent={'flex-end'} mb={10} flex={1}>
        <Spinner size="lg" />
      </VStack>
    </VStack>
  );
}

export default SplashScreen;
