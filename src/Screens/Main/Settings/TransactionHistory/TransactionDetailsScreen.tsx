import {
  Avatar,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, ChevronDown, MoreCircle, Star} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import Images from '../../../../Constants/Images';
import CopySvg from '../../../../Components/IconComponents/Copy';

function TransactionDetailsScreen(): JSX.Element {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <VStack>
          <HStack
            bg="white"
            alignItems="center"
            justifyContent="space-between"
            width={'100%'}>
            <HStack alignItems="center" space={1} p={5}>
              <IconButton
                icon={<ArrowLeft set="light" color="black" />}
                borderRadius="full"
              />
              <IconButton
                icon={<MoreCircle set="curved" color="black" />}
                borderRadius="full"
              />
              <Heading fontWeight={700} fontSize={24} maxWidth={'200'}>
                {t('transactionDetails.title')}
              </Heading>
            </HStack>
            <HStack alignItems="center" space={1} p={5}>
              <IconButton
                icon={<MoreCircle set="light" color="black" />}
                borderRadius="full"
              />
            </HStack>
          </HStack>
          <Center mx={10} my={4}>
            <Image
              source={Images.transactionDetails.receipt}
              alt="receipt"
              height={140}
            />
          </Center>
          <View bg="white" mx={5} p={4} borderRadius={10}>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack space={3} alignItems="center">
                <Avatar
                  size="lg"
                  source={{
                    uri: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
                  }}
                />
                <VStack space={1}>
                  <Text fontWeight={700} fontSize={18}>
                    Daniel Austin
                  </Text>
                  <Text fontWeight={500} fontSize={14}>
                    Mercedes-Benz E-Cl..
                  </Text>
                </VStack>
              </HStack>
              <VStack space={2} alignItems="flex-end">
                <HStack space={1}>
                  <Text fontWeight={500} fontSize={14}>
                    4.2
                  </Text>
                  <Star set="bulk" color={'#FEBB1B'} />
                </HStack>
                <Text fontWeight={700} fontSize={14}>
                  HSW 4736 XK
                </Text>
              </VStack>
            </HStack>
          </View>
          <View bg="white" mx={5} p={4} borderRadius={10} mt={4}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="#616161" fontWeight={500} fontSize={14}>
                Amount
              </Text>
              <Text color="#424242" fontWeight={600} fontSize={16}>
                $20.00
              </Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="primary.500" fontWeight={500} fontSize={14}>
                Promo
              </Text>
              <Text color="primary.500" fontWeight={600} fontSize={16}>
                - $6.00
              </Text>
            </HStack>
            <Divider backgroundColor={'#eee'} my={4} />
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="#616161" fontWeight={500} fontSize={14}>
                Total
              </Text>
              <Text color="#424242" fontWeight={600} fontSize={16}>
                $14.00
              </Text>
            </HStack>
          </View>
          <View bg="white" mx={5} p={4} borderRadius={10} mt={4}>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="#616161" fontWeight={500} fontSize={14}>
                  Payment Methods
                </Text>
                <Text color="#424242" fontWeight={600} fontSize={16}>
                  My E-Wallet
                </Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="#616161" fontWeight={500} fontSize={14}>
                  Date
                </Text>
                <Text color="#424242" fontWeight={600} fontSize={16}>
                  Dec 20, 2024 | 10:00:27 AM
                </Text>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="#616161" fontWeight={500} fontSize={14}>
                  Transaction ID
                </Text>
                <HStack alignItems="center" space={1}>
                  <Text color="#424242" fontWeight={600} fontSize={16}>
                    SK7263727399
                  </Text>
                  <CopySvg />
                </HStack>
              </HStack>
              <HStack alignItems="center" justifyContent="space-between">
                <Text color="#616161" fontWeight={500} fontSize={14}>
                  Status
                </Text>
                <Button height={'35px'}>
                  <Text color="#424242" fontWeight={600} fontSize={10}>
                    Paid
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </View>
          <View bg="white" mx={5} mb={4} p={4} borderRadius={10} mt={4}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="#616161" fontWeight={500} fontSize={14}>
                Category
              </Text>
              <HStack space={2}>
                <Text fontWeight={700} fontSize={16}>
                  Taxi Expense
                </Text>
                <ChevronDown color="#000" />
              </HStack>
            </HStack>
          </View>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TransactionDetailsScreen;
