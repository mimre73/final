import React from 'react';
import {Center, Heading, Image, Modal, Spinner, Text} from 'native-base';
import {useTranslation} from 'react-i18next';
import useAccountReadyModalController from '../../ViewControllers/Auth/useAccountReadyModalController';
import Images from '../../Constants/Images';

function ReadyAccountModal(props: BasicModalProps) {
  const {t} = useTranslation();
  const {} = useAccountReadyModalController();

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
              {t('modals.accountReady.title')}
            </Heading>
          </Center>

          <Text textAlign="center" mt={6}>
            {t('modals.accountReady.desc')}
          </Text>
          <Center mt={4}>
            <Spinner size="lg" />
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
export default ReadyAccountModal;
