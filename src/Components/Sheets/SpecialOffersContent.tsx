import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Button,
  Center,
  Divider,
  Heading,
  Text,
  VStack,
  View,
} from 'native-base';
import {useTranslation} from 'react-i18next';
import OfferSvg from '../IconComponents/Offers';
import {TicketStar} from 'react-native-iconly';
import CopySvg from '../IconComponents/Copy';

const SpecialOffersContent = () => {
  const {t} = useTranslation();
  return (
    <VStack>
      <Center my={4} mx={2}>
        <Divider bg={'#eee'} />
      </Center>
      <Center>
        <Heading fontSize={24} fontWeight={700}>
          {t('offers.title')}
        </Heading>
      </Center>
      <Center mt={8}>
        <View style={styles.badge}>
          <OfferSvg firstColor={'#FEBB1B'} secondColor={'#FFC740'} />
          <View style={styles.offerIcon}>
            <TicketStar set="bold" color="white" />
          </View>
        </View>
        <Heading mt={5} fontSize={24} fontWeight={700}>
          Discount 35% Off
        </Heading>
        <Text mt={2} fontSize={16} fontWeight={400}>
          Special promo only valid for today!
        </Text>
        <Button mt={4} bg={'primary.100'} rightIcon={<CopySvg />}>
          GH637JHAK
        </Button>
        <Divider m={5} bg={'#eee'} />
        <Heading mt={5} fontSize={16} fontWeight={700}>
          Terms and conditions:
        </Heading>
        <Text mt={2} mx={4} fontSize={14} fontWeight={400}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </Center>
    </VStack>
  );
};
const styles = StyleSheet.create({
  badge: {
    width: 68,
    height: 68,
    position: 'relative',
    borderRadius: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerIcon: {
    position: 'absolute',
  },
});
export default SpecialOffersContent;
