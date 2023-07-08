import React from 'react';
import {
  Button,
  Center,
  Divider,
  Heading,
  IconButton,
  Input,
  Text,
  VStack,
} from 'native-base';
import {Location} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';

const AddressDetailsContent = () => {
  const {t} = useTranslation();
  return (
    <VStack space={5} p={3}>
      <Center>
        <Heading fontWeight={700} fontSize={24}>
          Address Details
        </Heading>
      </Center>
      <Divider />
      <VStack space={2}>
        <Text fontSize={18} fontWeight={700}>
          {t('addressDetails.name')}
        </Text>
        <Input size="md" />
        <Text fontSize={18} fontWeight={700}>
          {t('addressDetails.details')}
        </Text>
        <Input
          InputRightElement={
            <IconButton
              icon={<Location color="#000" set="bold" />}
              borderRadius="full"
            />
          }
          size="md"
        />
        <Button>
          <Text fontWeight={700} fontSize={16}>
            {t('addressDetails.save')}
          </Text>
        </Button>
      </VStack>
    </VStack>
  );
};

export default AddressDetailsContent;
