import React from 'react';
import {
  VStack,
  Button,
  IconButton,
  HStack,
  Text,
  Center,
  Image,
  ScrollView,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import Images from '../../Constants/Images';
import ReadyAccountModal from '../../Components/Modals/ReadyAccountModal';

function FingerprintScreen(): JSX.Element {
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
            {t('fingerprint.title')}
          </Text>
        </HStack>
        <Center mt={10}>
          <Text textAlign="center" fontWeight={400} fontSize={18}>
            {t('fingerprint.add')}
          </Text>
        </Center>
        <Center mt={10}>
          <Image
            source={Images.fingerprint.image}
            alt="Alternate Text"
            size="2xl"
            resizeMode="contain"
          />
        </Center>

        <Center mt={10}>
          <Text textAlign="center" fontWeight={400} fontSize={18}>
            {t('fingerprint.placefinger')}
          </Text>
        </Center>
        <HStack mt={8} space={2}>
          <Button
            flex={1}
            bg="primary.100"
            onPress={() => console.log('navigation.navigate(AccountSetup)')}>
            {t('common.skip')}
          </Button>
          <Button flex={1} onPress={() => setModalOpen(true)}>
            {t('common.continue')}
          </Button>
        </HStack>
        {modalOpen && (
          <ReadyAccountModal open={modalOpen} setOpen={setModalOpen} />
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
export default FingerprintScreen;
