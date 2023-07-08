import {HStack, IconButton} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Message, Notification, Setting, Star} from 'react-native-iconly';
import useHomeActionsController from '../../ViewControllers/Home/useHomeActionsController';

function HomeActionsComponent(): JSX.Element {
  const {onInboxPress, onSettingsPress, onNotifsPress, onOffersPress} =
    useHomeActionsController();
  return (
    <View style={styles.actionsContainer}>
      <HStack justifyContent="space-between" flex={1}>
        <IconButton
          variant="solid"
          bg={'primary[200]'}
          onPress={onSettingsPress}
          icon={<Setting color="#35383F" set="light" />}
          borderRadius="full"
        />
        <HStack space={3}>
          <IconButton
            variant="solid"
            bg={'primary[200]'}
            onPress={onInboxPress}
            icon={<Message color="#35383F" set="light" />}
            borderRadius="full"
          />
          <IconButton
            variant="solid"
            bg={'primary[200]'}
            onPress={onNotifsPress}
            icon={<Notification color="#35383F" set="curved" />}
            borderRadius="full"
          />
          <IconButton
            variant="solid"
            bg={'primary[200]'}
            onPress={onOffersPress}
            icon={<Star color="#35383F" set="curved" />}
            borderRadius="full"
          />
        </HStack>
      </HStack>
    </View>
  );
}
const styles = StyleSheet.create({
  actionsContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});
export default HomeActionsComponent;
