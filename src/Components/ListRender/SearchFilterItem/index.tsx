import React from 'react';
import {Button} from 'native-base';
import {Location} from 'react-native-iconly';
import theme from '../../../Theme';

interface SearchFilterType {
  title: string;
  id: number;
}
interface Props {
  data: SearchFilterType;
  onItemPress: () => void;
}

const SearchFilterItem = ({data, onItemPress}: Props) => {
  return (
    <Button
      key={data.id}
      borderColor={'primary.500'}
      mr={2}
      _text={{
        color: 'primary.500',
      }}
      height={45}
      onPress={onItemPress}
      leftIcon={<Location set="bold" color={theme.colors.primary[500]} />}
      variant={'outline'}
      color={'primary'}>
      {data.title}
    </Button>
  );
};

export default SearchFilterItem;
