import React, {useEffect} from 'react';
import {Center, Heading, Image, Modal, Spinner, Text} from 'native-base';
import Images from '../../Constants/Images';
import {useTranslation} from 'react-i18next';

function ChangePasswordSuccessModal(props: BasicModalProps) {
  const {t} = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 3000);
  }, [props.navigation]);
  return (
    <Modal isOpen={props.open} onClose={props.setOpen} size={'lg'}>
      <Modal.Content borderRadius={20}>
        <Modal.Body py={8}>
          <Center>
            <Image
              source={Images.modals.accountReady.image}
              alt="Alternate Text"
              size="xl"
              resizeMode="contain"
            />
          </Center>
          <Center>
            <Heading size="md" fontWeight={800} mt={4}>
              {t('modals.changePassword.title')}
            </Heading>
          </Center>

          <Text textAlign="center" mt={6}>
            {t('modals.changePassword.desc')}
          </Text>
          <Center mt={4}>
            <Spinner size="lg" />
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
export default ChangePasswordSuccessModal;
