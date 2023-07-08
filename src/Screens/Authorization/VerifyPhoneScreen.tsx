import {Button, Center, HStack, IconButton, Text, VStack} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import {ArrowLeft} from 'react-native-iconly';
import useVerifyPhoneController from '../../ViewControllers/Auth/useVerifyPhoneController';

function VerifyPhoneScreen(): JSX.Element {
  const {t} = useTranslation();
  const {
    CELL_COUNT,
    props,
    timeLeft,
    onVerifyPress,
    onBackPress,
    ref,
    getCellOnLayoutHandler,
    value,
    setValue,
    phone,
  } = useVerifyPhoneController();
  return (
    <VStack p={5} flex={1} backgroundColor={'white'}>
      <HStack py={6} space={2} alignItems="center">
        <IconButton
          onPress={onBackPress}
          icon={<ArrowLeft color="black" />}
          borderRadius="full"
        />
        <Text fontWeight={700} fontSize={20}>
          {t('verifyPhone.title')}
        </Text>
      </HStack>
      <Center mt={10}>
        <Text fontWeight={500} fontSize={18}>
          {`Code has been send to ${phone}`}
        </Text>
      </Center>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Center mt={10}>
        <HStack space={1}>
          <Text fontWeight={500} fontSize={18}>
            Resent Code in
          </Text>
          <Text color="primary.500" fontWeight={500} fontSize={18}>
            {timeLeft}
          </Text>
          <Text fontWeight={500} fontSize={18}>
            s
          </Text>
        </HStack>
      </Center>
      {/* {value.length !== CELL_COUNT && (
        <Center mt={10}>
          <Text
            textAlign="center"
            color="error.500"
            fontWeight={500}
            fontSize={16}>
            {
              'Verification Failed!\n Please check the Phone number and try again'
            }
          </Text>
        </Center>
      )} */}
      <Button disabled={value.length < 6} mt={10} onPress={onVerifyPress}>
        Verify
      </Button>
    </VStack>
  );
}
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 50},
  cell: {
    width: 50,
    height: 61,
    lineHeight: 61,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    textAlign: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
  },
  focusCell: {
    borderColor: '#000',
  },
});
export default VerifyPhoneScreen;
