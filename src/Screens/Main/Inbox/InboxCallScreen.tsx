import {FlatList, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import callsDummyData from '../../../Dummy/Calls';
import CallItem from '../../../Components/ListRender/CallItem';

function InboxCallScreen(): JSX.Element {
  // const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <FlatList
          data={callsDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CallItem data={item} />}
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
export default InboxCallScreen;
