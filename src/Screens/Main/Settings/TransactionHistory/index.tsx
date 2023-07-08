import {FlatList, HStack, Heading, IconButton, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, Download, Filter2, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import TransactionsDummyData from '../../../../Dummy/Transactions';
import TransactionItem from '../../../../Components/ListRender/TransactionItem';

function TransactionHistoryScreen(): JSX.Element {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <VStack>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          width={'100%'}>
          <HStack alignItems="center" space={1} p={5}>
            <IconButton
              icon={<ArrowLeft set="light" color="black" />}
              borderRadius="full"
            />
            <IconButton
              icon={<MoreCircle set="curved" color="black" />}
              borderRadius="full"
            />
            <Heading fontWeight={700} fontSize={24} maxWidth={'200'}>
              {t('transactions.title')}
            </Heading>
          </HStack>
          <HStack alignItems="center" space={1} p={5}>
            <IconButton
              icon={<Filter2 set="light" color="black" />}
              borderRadius="full"
            />
            <IconButton
              icon={<Download set="curved" color="black" />}
              borderRadius="full"
            />
          </HStack>
        </HStack>
        <FlatList
          data={TransactionsDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TransactionItem
              data={item}
              onPressItem={(id: number) => {
                console.log('sdas', id);
                // navigation.navigate('TransactionDetails');
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default TransactionHistoryScreen;
