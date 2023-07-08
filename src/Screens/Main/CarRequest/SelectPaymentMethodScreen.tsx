import {
  Button,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {ArrowLeft, MoreCircle, Plus} from 'react-native-iconly';
import SelectPaymentsDummyData from '../../../Dummy/SelectPayment';
import SelectPaymentMethodItem from '../../../Components/ListRender/SelectPaymentMethodItem';

function SelectPaymentMethodScreen() {
  const {t} = useTranslation();
  const [selected, setSelected] = useState(0);

  return (
    <VStack flex={1}>
      <HStack p={4} alignItems="center" justifyContent="space-between">
        <HStack flex={1} alignItems="center">
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <MoreCircle set="curved" color="black" />
          <Heading flex={1} ml={4} fontWeight={700} fontSize={20}>
            {t('paymentSelect.title')}
          </Heading>
        </HStack>

        <IconButton
          icon={<Plus set="curved" color="black" />}
          borderRadius="full"
        />
      </HStack>
      <FlatList
        data={SelectPaymentsDummyData}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <Text p={2} fontSize={16} fontWeight={500}>
            {t('paymentSelect.desc')}
          </Text>
        }
        renderItem={({item}) => (
          <SelectPaymentMethodItem
            data={item}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      />
      <Button m={3}>
        <Text fontWeight={700} fontSize={16}>
          {t('addPromo.apply')}
        </Text>
      </Button>
    </VStack>
  );
}
export default SelectPaymentMethodScreen;
