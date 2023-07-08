import React from 'react';
import {Avatar, Button, HStack, Text, VStack} from 'native-base';

interface InviteType {
  id: number;
  name: string;
  phone: string;
  avatar: string;
}
interface Props {
  data: InviteType;
}

const InviteItem = ({data}: Props) => {
  return (
    <HStack py={3} px={4} alignItems="center" justifyContent="space-between">
      <HStack alignItems="center" space={2}>
        <Avatar source={{uri: data.avatar}} size="md" />
        <VStack space={2}>
          <Text fontWeight={700} fontSize={16}>
            {data.name}
          </Text>
          <Text color="#616161" fontWeight={500} fontSize={14}>
            {data.phone}
          </Text>
        </VStack>
      </HStack>
      <Button height={'40px'}>
        <Text fontWeight={700} fontSize={14}>
          Invite
        </Text>
      </Button>
    </HStack>
  );
};

export default InviteItem;
