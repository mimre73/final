import React from 'react';
import {
  VStack,
  Button,
  IconButton,
  HStack,
  Heading,
  Input,
  Text,
  Checkbox,
  Center,
  Divider,
  Image,
} from 'native-base';
import {ArrowLeft, Lock, Hide} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import CountryCodePicker from '../../Components/CountryCodePicker';
import FormikErrorsList from '../../Components/FormikErrorsList';
import useLoginController from '../../ViewControllers/Auth/useLoginController';
import Images from '../../Constants/Images';

function LoginScreen(): JSX.Element {
  const {t} = useTranslation();
  const {
    onSignInPress,
    formik,
    code,
    setCode,
    onForgotPress,
    onSignupPress,
    onBackPress,
  } = useLoginController();
  return (
    <VStack p={5} flex={1} backgroundColor={'white'}>
      <HStack py={6}>
        <IconButton
          onPress={onBackPress}
          icon={<ArrowLeft color="black" />}
          borderRadius="full"
        />
      </HStack>
      <Heading fontSize={48} fontWeight={800}>
        {t('login.title')}
      </Heading>
      <CountryCodePicker
        setCode={setCode}
        code={code}
        value={formik.values.phoneNumber}
        onChangeText={text => formik.setFieldValue('phoneNumber', text)}
        inputProps={{mt: 4, placeholder: '000 000 000'}}
      />
      <Input
        value={formik.values.password}
        onChangeText={text => formik.setFieldValue('password', text)}
        InputLeftElement={
          <IconButton
            icon={<Lock color="#9E9E9E" set="bold" />}
            borderRadius="full"
          />
        }
        InputRightElement={
          <IconButton
            icon={<Hide color="#9E9E9E" set="bold" />}
            borderRadius="full"
          />
        }
        mt={4}
        size="md"
        placeholder="Password"
      />
      <FormikErrorsList errors={formik.errors} />

      <Button mt={4} onPress={onSignInPress}>
        Sign in
      </Button>
      <Button
        mt={2}
        variant={'ghost'}
        _text={{
          color: 'primary.500',
        }}
        onPress={onForgotPress}>
        Forgot the password?
      </Button>
      <Center>
        <Checkbox
          onChange={e => formik.setFieldValue('remember', e)}
          value={'remember'}
          defaultIsChecked>
          Remember me
        </Checkbox>
      </Center>
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
        <Text>Don’t have an account?</Text>
        <Button
          variant={'ghost'}
          _text={{
            color: 'primary.500',
          }}
          onPress={onSignupPress}>
          Sign up
        </Button>
      </HStack>
    </VStack>
  );
}

export default LoginScreen;
