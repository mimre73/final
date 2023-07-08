import {FlatList, HStack, Heading, IconButton, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import FriendsData from '../../../../Dummy/Friends';
import InviteItem from '../../../../Components/ListRender/InviteItem';

function InviteFriendsScreen(): JSX.Element {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <HStack alignItems="center" space={1} p={5}>
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <IconButton
            icon={<MoreCircle set="curved" color="black" />}
            borderRadius="full"
          />
          <Heading fontWeight={700} fontSize={24}>
            {t('invite.title')}
          </Heading>
        </HStack>
        <FlatList
          data={FriendsData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <InviteItem data={item} />}
        />
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default InviteFriendsScreen;
