import React, {RefObject} from 'react';
import {
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from 'native-base';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Images from '../../Constants/Images';
interface Props {
  sheetRef: RefObject<BottomSheetMethods> | null;
}
const DeleteAccountContent = (props: Props) => {
  return (
    <VStack space={5}>
      <Center mx={3}>
        <Image alt="sad" source={Images.emoji.sad} size="xl" />
        <Divider width={30} mt={4} height={0.5} />
        <Heading mt={3} color="error.500" fontWeight={700} fontSize={24}>
          We are sorry to see you go!
        </Heading>
        <Text mt={3} fontWeight={700} fontSize={18}>
          To confirm the account deletion, please type the word ”DELETE” in
          below area and press the delete button.
        </Text>
        <Input mt={4} size="md" placeholder="DELETE" />
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
            Delete
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};

export default DeleteAccountContent;
