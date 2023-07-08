import React, {Dispatch, SetStateAction} from 'react';
import {Text, HStack, Pressable} from 'native-base';
import RadioSelectedSvg from '../../IconComponents/RadioSelected';
import RadioUnSelected from '../../IconComponents/RadioUnSelected';

interface DataType {
  title: string;
  id: number;
}
interface Props {
  data: DataType;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const LanguageItem = ({data, selected, setSelected}: Props) => {
  return (
    <Pressable p={5} onPress={() => setSelected(data.id)}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text>{data.title}</Text>
        {data.id === selected ? <RadioSelectedSvg /> : <RadioUnSelected />}
      </HStack>
    </Pressable>
  );
};

export default LanguageItem;
