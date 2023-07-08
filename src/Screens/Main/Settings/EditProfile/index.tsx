import {
  Button,
  HStack,
  Heading,
  IconButton,
  Input,
  ScrollView,
  Select,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, Calendar, Message, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import countriesData from '../../../../Dummy/Countries';
import CountryCodePicker from '../../../../Components/CountryCodePicker';

function EditProfileScreen(): JSX.Element {
  const {t} = useTranslation();
  const [country, setCountry] = useState('+1');
  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    console.log('event', event);
    console.log('selectedDate', currentDate);
  };
  return (
    <SafeAreaView style={styles.container}>
      <VStack>
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
            {t('editProfile.title')}
          </Heading>
        </HStack>
        <ScrollView>
          <VStack flex={1} backgroundColor={'white'} space={3} mx={4}>
            <Input value="Andrew Ainsleys" size="md" />
            <Input
              value={new Date().toDateString()}
              InputRightElement={
                <IconButton
                  onPress={() => {
                    DateTimePickerAndroid.open({
                      value: new Date(),
                      onChange,
                      mode: 'date',
                      is24Hour: true,
                    });
                  }}
                  icon={<Calendar color="#000" set="curved" />}
                  borderRadius="full"
                />
              }
              size="md"
              placeholder="Enter your birthdate"
            />
            <Input
              InputRightElement={
                <IconButton
                  icon={<Message color="#000" set="curved" />}
                  borderRadius="full"
                />
              }
              size="md"
              value="andrew_ainsley@yourdomain.com"
              placeholder="Enter your email"
            />
            <Select
              selectedValue={country}
              accessibilityLabel="Choose Country"
              placeholder="Choose Country"
              _selectedItem={{
                bg: 'teal.600',
              }}
              onValueChange={itemValue => setCountry(itemValue)}>
              {countriesData.map((item, idx) => {
                return (
                  <Select.Item key={idx} label={item.label} value={item.code} />
                );
              })}
            </Select>
            <CountryCodePicker
              setCode={setCountry}
              code={country}
              inputProps={{
                placeholder: '000 000 000',
                value: '111 367 456',
              }}
            />
            <Button>
              <Text fontWeight={700} fontSize={16}>
                Update
              </Text>
            </Button>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default EditProfileScreen;
