import React from 'react';
import {
  VStack,
  Button,
  IconButton,
  HStack,
  Input,
  Text,
  Checkbox,
  Center,
  Image,
  ScrollView,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {Lock, Hide, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import Images from '../../../Constants/Images';
import ChangePasswordSuccessModal from '../../../Components/Modals/ChangePasswordSuccessModal';

function ForgotChangePassword(): JSX.Element {
  const {t} = useTranslation();
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <VStack p={5} flex={1} backgroundColor={'white'}>
        <HStack py={6} alignItems="center">
          <IconButton
            icon={<MoreCircle set="curved" color="black" />}
            borderRadius="full"
          />
          <Text fontWeight={700} fontSize={20}>
            {t('forgotPassword.title')}
          </Text>
        </HStack>

        <Center>
          <Image
            source={Images.password.image}
            alt="Alternate Text"
            size="250"
            resizeMode="contain"
          />
        </Center>
        <Text fontWeight={500} fontSize={18}>
          Create Your Password
        </Text>
        <Input
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
        <Input
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
          placeholder="Confirm Password"
        />
        <Center mt={10}>
          <Checkbox value="remember" defaultIsChecked>
            Remember me
          </Checkbox>
        </Center>
        <Button mt={10} onPress={() => setModalOpen(true)}>
          Continue
        </Button>
        {modalOpen && (
          <ChangePasswordSuccessModal
            open={modalOpen}
            setOpen={setModalOpen}
            navigation={undefined}
          />
        )}
      </VStack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
});
export default ForgotChangePassword;
