import React, {Dispatch, SetStateAction} from 'react';
import {HStack, IInputProps, Input, Select, Text} from 'native-base';
import {StyleSheet, View} from 'react-native';

import FlagIcons from 'react-native-ico-flags';
import countriesData from '../../Dummy/Countries';

interface Props {
  inputProps?: IInputProps;
  setCode: Dispatch<SetStateAction<string>>;
  code: string;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}
function CountryCodePicker(props: Props): JSX.Element {
  return (
    <Input
      onChangeText={props.onChangeText}
      value={props.value}
      InputLeftElement={
        <HStack alignItems={'center'}>
          <View style={styles.selectContainer}>
            <View style={styles.iconContainer}>
              <FlagIcons
                name={
                  countriesData.filter(fl => fl.code === props.code).length > 0
                    ? countriesData.filter(fl => fl.code === props.code)[0].flag
                    : 'united-states-of-america'
                }
                color="transparent"
              />
            </View>
            <Select
              _selectedItem={{
                bg: 'teal.600',
              }}
              selectedValue={props.code}
              minWidth="20"
              accessibilityLabel=""
              mt={1}
              onValueChange={itemValue => props.setCode(itemValue)}>
              {countriesData.map((it, idx) => {
                return (
                  <Select.Item
                    label={it.label}
                    value={it.code}
                    key={idx}
                    leftIcon={
                      <FlagIcons name={it.flag} key={idx} color="transparent" />
                    }
                  />
                );
              })}
            </Select>
          </View>
          <Text color="#9E9E9E">{props.code}</Text>
        </HStack>
      }
      {...props.inputProps}
    />
  );
}
const styles = StyleSheet.create({
  selectContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    alignSelf: 'center',
    zIndex: 9999,
  },
});
export default CountryCodePicker;
