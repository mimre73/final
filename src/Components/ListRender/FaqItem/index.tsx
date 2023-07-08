import React, {useState} from 'react';
import {
  Divider,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
  View,
} from 'native-base';
import Collapsible from 'react-native-collapsible';
import {ChevronDown, ChevronUp} from 'react-native-iconly';
import theme from '../../../Theme';

export interface FaqType {
  id: number;
  title: string;
  desc: string;
}
interface Props {
  data: FaqType;
}

const FaqItem = ({data}: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <View p={5} bg="white" borderRadius={10} m={3}>
      <Pressable onPress={() => setOpen(!open)}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading fontWeight={700} fontSize={18}>
            {data.title}
          </Heading>
          {open ? (
            <ChevronDown set="bold" color={theme.colors.primary[500]} />
          ) : (
            <ChevronUp set="bold" color={theme.colors.primary[500]} />
          )}
        </HStack>
      </Pressable>
      <Collapsible collapsed={open} align="center">
        <VStack space={2} p={3}>
          <Divider bg={'#eee'} my={3} />
          <Text fontWeight={500} fontSize={14}>
            {data.desc}
          </Text>
        </VStack>
      </Collapsible>
    </View>
  );
};

export default FaqItem;
