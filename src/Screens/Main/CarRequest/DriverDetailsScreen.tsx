import {
  Avatar,
  Center,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
  View,
  theme,
} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  ArrowLeft,
  Call,
  Chat,
  MoreCircle,
  Star,
  TimeCircle,
} from 'react-native-iconly';
import CopySvg from '../../../Components/IconComponents/Copy';
import TaxiSvg from '../../../Components/IconComponents/Taxi';
import useDriverDetailsController from '../../../ViewControllers/useDriverDetailsController';

function DriverDetailsScreen(): JSX.Element {
  const {t} = useTranslation();
  const {onCallPress, onChatPress} = useDriverDetailsController();
  return (
    <SafeAreaView style={styles.container}>
      <VStack p={2} flex={1}>
        <HStack py={3} alignItems="center" space={2}>
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <MoreCircle set="curved" color="black" />
          <Heading ml={4} flex={1} fontWeight={700} fontSize={24}>
            {t('driverDetails.title')}
          </Heading>
          <MoreCircle set="light" color="black" />
        </HStack>
        <Center mt={2}>
          <Avatar
            source={{
              uri: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
            }}
            size="2xl"
          />
          <Text mt={2} fontSize={24} fontWeight={700}>
            Daniel Austin
          </Text>
          <HStack mt={1} alignItems="center" space={1}>
            <Text fontSize={18} fontWeight={700}>
              +1-202-555-0161
            </Text>
            <CopySvg />
          </HStack>
        </Center>
        <FlatList
          data={[]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => null}
          ListHeaderComponent={
            <VStack mt={3} space={4}>
              <View p={3} borderRadius={10} bgColor={'white'}>
                <HStack alignItems="center" space={2}>
                  <VStack
                    flex={1}
                    space={1}
                    alignItems="center"
                    justifyContent="center">
                    <View style={styles.badge}>
                      <Star set="bulk" color="black" />
                    </View>
                    <Text fontSize={18} fontWeight={700}>
                      4.8
                    </Text>
                    <Text fontSize={12} fontWeight={400}>
                      {t('driverDetails.rating')}
                    </Text>
                  </VStack>
                  <VStack
                    space={1}
                    flex={1}
                    alignItems="center"
                    justifyContent="center">
                    <View style={styles.badge}>
                      <TaxiSvg />
                    </View>
                    <Text fontSize={18} fontWeight={700}>
                      279
                    </Text>
                    <Text fontSize={12} fontWeight={400}>
                      {t('driverDetails.trips')}
                    </Text>
                  </VStack>
                  <VStack
                    flex={1}
                    space={1}
                    alignItems="center"
                    justifyContent="center">
                    <View style={styles.badge}>
                      <TimeCircle set="light" color="black" />
                    </View>
                    <Text fontSize={18} fontWeight={700}>
                      5
                    </Text>
                    <Text fontSize={12} fontWeight={400}>
                      {t('driverDetails.years')}
                    </Text>
                  </VStack>
                </HStack>
              </View>
              <View p={3} borderRadius={10} bgColor={'white'}>
                <VStack space={2}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontSize={16} fontWeight={500}>
                      {t('driverDetails.since')}
                    </Text>
                    <Text fontSize={18} fontWeight={600}>
                      July 15, 2019
                    </Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontSize={16} fontWeight={500}>
                      {t('driverDetails.model')}
                    </Text>
                    <Text fontSize={18} fontWeight={600}>
                      Mercedes-Benz E-Class
                    </Text>
                  </HStack>
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontSize={16} fontWeight={500}>
                      {t('driverDetails.plate')}
                    </Text>
                    <Text fontSize={18} fontWeight={600}>
                      HSW 4736 XK
                    </Text>
                  </HStack>
                </VStack>
              </View>
            </VStack>
          }
        />
        <HStack py={5} alignItems="center" justifyContent="center" space={3}>
          <IconButton
            p={5}
            onPress={onCallPress}
            icon={<Call set="bold" color="black" />}
            borderRadius="full"
            bg="primary.500"
          />
          <IconButton
            p={5}
            onPress={onChatPress}
            icon={<Chat set="bold" color="black" />}
            borderRadius="full"
            bg="primary.500"
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  badge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DriverDetailsScreen;
