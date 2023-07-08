import React from 'react';
import {Button, Center, Image, Modal, Text} from 'native-base';
import Images from '../../Constants/Images';
import {useTranslation} from 'react-i18next';

function CancelTaxiModal(props: BasicModalProps) {
  const {t} = useTranslation();

  return (
    <Modal isOpen={props.open} onClose={props.setOpen} size={'lg'}>
      <Modal.Content borderRadius={20}>
        <Modal.Body py={8}>
          <Center>
            <Image
              source={Images.emoji.sad}
              alt="sad emojie"
              size="xl"
              resizeMode="contain"
            />
            <Text fontSize={24} fontWeight={700} textAlign="center" mt={6}>
              {t('modals.cancelTaxi.title')}
            </Text>
            <Text fontSize={16} fontWeight={400} textAlign="center" mt={6}>
              {t('modals.cancelTaxi.desc')}
            </Text>
          </Center>
          <Button mt={6} onPress={() => props.setOpen(false)}>
            <Text fontSize={16} fontWeight={700} textAlign="center">
              {t('common.ok')}
            </Text>
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
export default CancelTaxiModal;
