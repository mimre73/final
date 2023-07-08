import {HStack, Heading, IconButton, SectionList, VStack} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import notificationsDummyData from '../../Dummy/Notifications';
import NotificationItem from '../../Components/ListRender/NotificationItem';

function NotificationsScreen() {
  const {t} = useTranslation();
  return (
    <VStack flex={1}>
      <HStack p={4} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <MoreCircle set="curved" color="black" />
          <Heading ml={4} fontWeight={700} fontSize={24}>
            {t('notifications.title')}
          </Heading>
        </HStack>

        <IconButton
          icon={<MoreCircle set="light" color="black" />}
          borderRadius="full"
        />
      </HStack>
      <SectionList
        sections={notificationsDummyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <NotificationItem data={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Heading fontSize={18} p="4" fontWeight={700}>
            {title}
          </Heading>
        )}
      />
    </VStack>
  );
}
export default NotificationsScreen;
