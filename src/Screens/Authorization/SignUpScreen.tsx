import React from 'react';
import {
  VStack,
  Button,
  IconButton,
  HStack,
  Heading,
  Text,
  Divider,
  Image,
  Center,
} from 'native-base';
import {ArrowLeft} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import useSignUpController from '../../ViewControllers/Auth/useSignUpController';
import CountryCodePicker from '../../Components/CountryCodePicker';
import FormikErrorsList from '../../Components/FormikErrorsList';
import Images from '../../Constants/Images';

function SignUpScreen(): JSX.Element {
  const {t} = useTranslation();
  const {
    code,
    setCode,
    formik,
    onSignupPress,
    onSignInPress,
    onBackPress,
    loading,
  } = useSignUpController();

  return (
    <VStack p={5} flex={1} backgroundColor={'white'}>
      <HStack py={6}>
        <IconButton
          onPress={onBackPress}
          icon={<ArrowLeft color="black" />}
          borderRadius="full"
        />
      </HStack>
      <Center>
        <Image source={Images.signup.image} alt="Alternate Text" size="200" />
      </Center>
      <Heading mt="4" fontSize={35} fontWeight={800}>
        {t('signup.title')}
      </Heading>
      <CountryCodePicker
        setCode={setCode}
        code={code}
        inputProps={{mt: 4, placeholder: '000 000 000'}}
        value={formik.values.phoneNumber}
        onChangeText={text => formik.setFieldValue('phoneNumber', text)}
      />
      <FormikErrorsList errors={formik.errors} />
      <Button
        mt={4}
        disabled={loading || !formik.isValid}
        onPress={onSignupPress}>
        {loading ? 'Loading...' : 'Sign up'}
      </Button>
      <HStack mt={6} alignItems="center">
        <Divider flex={1} orientation="horizontal" />
        <Text fontSize={18} fontWeight={500} mx={'4'}>
          or continue with
        </Text>
        <Divider flex={1} orientation="horizontal" />
      </HStack>
      <HStack space={5} mt={4} alignItems="center" justifyContent="center">
        <HStack flex={0.3} />
        <Button borderRadius={10} variant="outline" flex={1}>
          <Image
            source={Images.login.windows}
            alt="Alternate Text"
            width={'24px'}
            height={'24px'}
          />
        </Button>

        <Button borderRadius={10} variant="outline" flex={1}>
          <Image
            source={Images.login.google}
            alt="Alternate Text"
            width={'24px'}
            height={'24px'}
          />
        </Button>
        <Button borderRadius={10} variant="outline" flex={1}>
          <Image
            source={Images.login.apple}
            alt="Alternate Text"
            width={'24px'}
            height={'24px'}
          />
        </Button>
        <HStack flex={0.3} />
      </HStack>
      <HStack mt={2} alignItems="center" justifyContent="center">
        <Text>Already have an account?</Text>
        <Button
          variant={'ghost'}
          _text={{
            color: 'primary.500',
          }}
          onPress={onSignInPress}>
          Sign in
        </Button>
      </HStack>
    </VStack>
  );
}

export default SignUpScreen;
