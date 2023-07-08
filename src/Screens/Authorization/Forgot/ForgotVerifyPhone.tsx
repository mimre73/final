import React, {useEffect, useState} from 'react';
import {VStack, Button, IconButton, HStack, Text, Center} from 'native-base';
import {ArrowLeft} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {StyleSheet} from 'react-native';

const CELL_COUNT = 6;

function ForgotVerifyPhone(): JSX.Element {
  const {t} = useTranslation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    // exit early when we reach 0
    // eslint-disable-next-line curly
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <VStack p={5} flex={1} backgroundColor={'white'}>
      <HStack py={6} space={2} alignItems="center">
        <IconButton icon={<ArrowLeft color="black" />} borderRadius="full" />
        <Text fontWeight={700} fontSize={20}>
          {t('forgotPassword.title')}
        </Text>
      </HStack>
      <Center mt={10}>
        <Text fontWeight={500} fontSize={18}>
          Code has been send to +1 111 ******99
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
      {value.length === CELL_COUNT && value !== '111111' && (
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
      )}
      <Button
        disabled={value.length < 6}
        mt={10}
        onPress={() =>
          console.log('navigation.navigate(ForgotChangePassword)')
        }>
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
export default ForgotVerifyPhone;
