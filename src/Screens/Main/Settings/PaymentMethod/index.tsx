import {
  Button,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import PaymentsDummyData from '../../../../Dummy/Payments';
import PaymentMethodItem from '../../../../Components/ListRender/PaymentMethodItem';
import usePaymentMethodsController from '../../../../ViewControllers/usePaymentMethodsController';

function PaymentMethodScreen(): JSX.Element {
  const {t} = useTranslation();
  const {onBackPress, onNewCardAddPress, onItemPress} =
    usePaymentMethodsController();
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1}>
        <HStack alignItems="center" space={1} p={5}>
          <IconButton
            onPress={onBackPress}
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <IconButton
            icon={<MoreCircle set="curved" color="black" />}
            borderRadius="full"
          />
          <Heading fontWeight={700} fontSize={24}>
            {t('payment.title')}
          </Heading>
        </HStack>
        <FlatList
          data={PaymentsDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <PaymentMethodItem data={item} onItemPress={onItemPress} />
          )}
        />
        <Button mb={4} mx={2} onPress={onNewCardAddPress}>
          <Text fontWeight={700}>{t('addCard.title')}</Text>
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PaymentMethodScreen;
