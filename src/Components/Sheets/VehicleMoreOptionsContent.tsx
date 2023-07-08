import React, {RefObject, useState} from 'react';
import {Button, Checkbox, Divider, HStack, Text, VStack} from 'native-base';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {ChevronRight, TimeCircle, TwoUsers} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import theme from '../../Theme';
import BabySitSvg from '../IconComponents/BabySit';
import WheelchairSvg from '../IconComponents/Wheelchair';
interface Props {
  sheetRef: RefObject<BottomSheetMethods> | null;
}
const VehicleMoreOptionsContent = (props: Props) => {
  const {t} = useTranslation();
  const [passengerCount, setPassengerCount] = useState(1);
  const [waitingTime, setWaitingTime] = useState(0);

  return (
    <VStack p={3}>
      <Divider mb={4} />

      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight={700} fontSize={16}>
          {t('vehicleType.more')}
        </Text>
        <ChevronRight color={theme.colors.primary[500]} />
      </HStack>
      <HStack mt={2} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space={2}>
          <TwoUsers color={theme.colors.primary[500]} />
          <Text fontSize={16} fontWeight={500}>
            {t('vehicleType.passenger')}
          </Text>
        </HStack>
        <HStack alignItems="center" space={2}>
          <Button
            height="auto"
            disabled={passengerCount === 0}
            onPress={() => setPassengerCount(prev => prev - 1)}>
            <Text fontWeight={700} fontSize={16}>
              -
            </Text>
          </Button>
          <Button
            borderWidth={1}
            borderColor="#eee"
            height="auto"
            disabled
            minWidth={'40px'}
            bgColor={'#fafafa'}>
            <Text fontWeight={700} fontSize={16}>
              {passengerCount}
            </Text>
          </Button>

          <Button
            height="auto"
            onPress={() => setPassengerCount(prev => prev + 1)}>
            <Text fontWeight={700} fontSize={16}>
              +
            </Text>
          </Button>
        </HStack>
      </HStack>
      <HStack mt={2} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space={2}>
          <TimeCircle color={theme.colors.primary[500]} />
          <Text fontSize={16} fontWeight={500}>
            {t('vehicleType.waiting')}
          </Text>
        </HStack>
        <HStack alignItems="center" space={2}>
          <Button
            height="auto"
            disabled={waitingTime === 0}
            onPress={() => setWaitingTime(prev => prev - 1)}>
            <Text fontWeight={700} fontSize={16}>
              -
            </Text>
          </Button>
          <Button
            borderWidth={1}
            borderColor="#eee"
            height="auto"
            disabled
            minWidth={'40px'}
            bgColor={'#fafafa'}>
            <Text fontWeight={700} fontSize={16}>
              {waitingTime}
            </Text>
          </Button>

          <Button
            height="auto"
            onPress={() => setWaitingTime(prev => prev + 1)}>
            <Text fontWeight={700} fontSize={16}>
              +
            </Text>
          </Button>
        </HStack>
      </HStack>
      <HStack py={4} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space={2}>
          <BabySitSvg />
          <Text fontSize={16} fontWeight={500}>
            {t('vehicleType.baby')}
          </Text>
        </HStack>
        <Checkbox value="baby" accessibilityLabel="Baby Sitter" />
      </HStack>
      <HStack pt={2} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space={2}>
          <WheelchairSvg />
          <Text fontSize={16} fontWeight={500}>
            {t('vehicleType.wheelchair')}
          </Text>
        </HStack>
        <Checkbox value="wheelchair" accessibilityLabel="Wheel Chair" />
      </HStack>
      <Button mt={4} onPress={() => props.sheetRef?.current?.close()}>
        <Text fontWeight={800} fontSize={16}>
          {t('common.update')}
        </Text>
      </Button>
    </VStack>
  );
};
export default VehicleMoreOptionsContent;
