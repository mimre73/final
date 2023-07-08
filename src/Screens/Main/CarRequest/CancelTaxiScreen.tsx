import {
  Button,
  Checkbox,
  HStack,
  Heading,
  IconButton,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import CancelTaxiModal from '../../../Components/Modals/CancelTaxiModal';

function CancelTaxiScreen() {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VStack flex={1}>
        <HStack p={4} alignItems="center">
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <MoreCircle set="curved" color="black" />
          <Heading ml={4} fontWeight={700} fontSize={24}>
            {t('cancelTaxi.title')}
          </Heading>
        </HStack>
        <VStack p={3} flex={1}>
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <Checkbox key={index} value={item.toString()} my={2}>
                <Text fontSize={18} fontWeight={600}>
                  {t(`cancelTaxi.reason${item}`)}
                </Text>
              </Checkbox>
            );
          })}
          <Heading fontWeight={700} my={4} fontSize={18}>
            {t('cancelTaxi.others')}
          </Heading>
          <Input placeholder={t('cancelTaxi.placeholder') || ''} size="md" />
        </VStack>
        <Button m={2} onPress={() => setOpen(true)}>
          <Heading my={2} fontSize={18}>
            {t('common.submit')}
          </Heading>
        </Button>
        {open && <CancelTaxiModal open={open} setOpen={setOpen} />}
      </VStack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
});
export default CancelTaxiScreen;
