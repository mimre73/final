import {
  Button,
  HStack,
  Heading,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, Calendar, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import {CreditCardInput} from 'react-native-credit-card-input-plus';
import Images from '../../../../Constants/Images';
import MaskInput from 'react-native-mask-input';
import {useKeyboardVisible} from '../../../../Hooks/useKeyboardVisible';

function AddNewCardScreen(): JSX.Element {
  const {t} = useTranslation();
  const cardRef = useRef<any>(null);
  const [data, setData] = useState<CardInfo>();
  const nameRef = useRef<any>(null);
  const numberRef = useRef<any>(null);
  const expiryRef = useRef<any>(null);
  const cvcRef = useRef<any>(null);
  const keyboardVisible = useKeyboardVisible();
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <HStack alignItems="center" space={1} p={5}>
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <IconButton
            icon={<MoreCircle set="curved" color="black" />}
            borderRadius="full"
          />
          <Heading fontWeight={700} fontSize={24}>
            {t('addCard.title')}
          </Heading>
        </HStack>
        <CreditCardInput
          autoFocus
          requiresName
          requiresCVC
          labelStyle={styles.cardNone}
          inputStyle={styles.cardNone}
          validColor={'black'}
          ref={cardRef}
          cardImageFront={Images.newCard.card}
          cardImageBack={Images.newCard.card}
          invalidColor={'red'}
          placeholderColor={'darkgray'}
          onChange={(formData: CardInfo) => setData(formData)}
        />
        <ScrollView>
          <VStack px={3} space={2}>
            <Text fontWeight={700} fontSize={18}>
              Card Name
            </Text>
            <MaskInput
              ref={nameRef}
              autoFocus
              style={styles.inputContainer}
              onSubmitEditing={() => numberRef.current.focus()}
              value={data?.values.name}
              onChangeText={(masked: string) => {
                cardRef.current?.setValues({name: masked});
              }}
            />
            <Text fontWeight={700} fontSize={18}>
              Card Number
            </Text>
            <MaskInput
              ref={numberRef}
              style={styles.inputContainer}
              onSubmitEditing={() => expiryRef.current.focus()}
              value={data?.values.number}
              onChangeText={(masked: string) => {
                cardRef.current?.setValues({number: masked});
              }}
              mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
            />
            <HStack space={2}>
              <VStack flex={1}>
                <Text fontWeight={700} fontSize={18}>
                  Expiry Date
                </Text>
                <HStack
                  alignItems="center"
                  px={2}
                  backgroundColor={'#f1f1f1'}
                  borderRadius={10}>
                  <MaskInput
                    ref={expiryRef}
                    style={styles.container}
                    onSubmitEditing={() => cvcRef.current.focus()}
                    value={data?.values.expiry}
                    onChangeText={(masked: string) => {
                      cardRef.current?.setValues({expiry: masked});
                    }}
                    mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                  />
                  <Calendar color="black" set="curved" />
                </HStack>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight={700} fontSize={18}>
                  CVV
                </Text>
                <MaskInput
                  ref={cvcRef}
                  style={styles.inputContainer}
                  value={data?.values.cvc}
                  onChangeText={(masked: string) => {
                    cardRef.current?.setValues({cvc: masked});
                  }}
                />
              </VStack>
            </HStack>
          </VStack>
        </ScrollView>
        <Button
          position="absolute"
          bottom={10}
          left={3}
          right={3}
          display={keyboardVisible ? 'none' : 'flex'}>
          <Text fontWeight={700} fontSize={16}>
            Add New Card
          </Text>
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardNone: {
    display: 'none',
  },
  inputContainer: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
export default AddNewCardScreen;
