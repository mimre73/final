import React, {RefObject} from 'react';
import {
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from 'native-base';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
interface Props {
  sheetRef: RefObject<BottomSheetMethods> | null;
}
const LogoutContent = (props: Props) => {
  return (
    <VStack space={5}>
      <Center>
        <Heading color="error.500" fontWeight={700} fontSize={24}>
          Logout
        </Heading>
      </Center>
      <Divider />
      <Center>
        <Text fontWeight={700} fontSize={20}>
          Are you sure you want to log out?
        </Text>
      </Center>
      <HStack px={3} pb={4} flex={1} space={3}>
        <Button
          onPress={() => props.sheetRef?.current?.close()}
          flex={1}
          bg={'primary.100'}>
          <Text fontWeight={700} fontSize={16}>
            Cancel
          </Text>
        </Button>
        <Button flex={1} bg={'primary.500'}>
          <Text fontWeight={700} fontSize={16}>
            Yes, Logout
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default LogoutContent;
