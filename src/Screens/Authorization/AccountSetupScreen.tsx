import React from 'react';
import {
  VStack,
  Button,
  IconButton,
  HStack,
  Input,
  Text,
  Center,
  Avatar,
} from 'native-base';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ArrowLeft, EditSquare, Calendar, Message} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import useAccountSetupController from '../../ViewControllers/Auth/useAccountSetupController';
import CountryCodePicker from '../../Components/CountryCodePicker';
import FormikErrorsList from '../../Components/FormikErrorsList';
import Images from '../../Constants/Images';

function AccountSetupScreen(): JSX.Element {
  const {t} = useTranslation();
  const {formik, code, setCode, onContinuePress, onBackPress, onReverifyPress} =
    useAccountSetupController();

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <VStack p={5} flex={1} backgroundColor={'white'}>
        <HStack py={6} alignItems="center">
          <IconButton
            onPress={onBackPress}
            icon={<ArrowLeft color="black" />}
            borderRadius="full"
          />
          <Text fontSize={20} fontWeight={700}>
            {t('accountSetup.title')}
          </Text>
        </HStack>
        <Center>
          <View style={styles.imageContainer}>
            <Avatar
              borderWidth={0}
              size={'2xl'}
              source={Images.accountSetup.user}>
              <Avatar.Badge bg="transparent">
                <EditSquare set="bold" color="#FEBB1B" />
              </Avatar.Badge>
            </Avatar>
          </View>
        </Center>
        <Input
          value={formik.values.firstName}
          onChangeText={text => formik.setFieldValue('firstName', text)}
          mt={4}
          size="md"
          placeholder={`${t('common.firstname')}`}
        />
        <Input
          value={formik.values.lastName}
          onChangeText={text => formik.setFieldValue('lastName', text)}
          mt={4}
          size="md"
          placeholder={`${t('common.lastname')}`}
        />
        <Input
          mt={4}
          value={formik.values.birthDate}
          onChangeText={text => formik.setFieldValue('birthDate', text)}
          size="md"
          placeholder={`${t('common.birth')}`}
          rightElement={
            <IconButton
              icon={<Calendar color="black" set="curved" />}
              borderRadius="full"
            />
          }
        />
        <Input
          mt={4}
          size="md"
          value={formik.values.email}
          onChangeText={text => formik.setFieldValue('email', text)}
          placeholder={`${t('common.email')}`}
          rightElement={
            <IconButton
              icon={<Message color="black" set="curved" />}
              borderRadius="full"
            />
          }
        />
        <CountryCodePicker
          setCode={setCode}
          code={code}
          inputProps={{mt: 4, placeholder: '000 000 000', value: '111 367 456'}}
        />
        <FormikErrorsList errors={formik.errors} />
        <Button mt={4} onPress={onReverifyPress}>
          {t('accountSetup.reverify')}
        </Button>
        <Button mt={4} onPress={onContinuePress}>
          {t('common.continue')}
        </Button>
      </VStack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  root: {
    flexGrow: 1,
  },
});
export default AccountSetupScreen;
