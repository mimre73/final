import {
  Button,
  Divider,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import AddressDummyData from '../../../../Dummy/Address';
import AddressItem from '../../../../Components/ListRender/AddressItem';
const renderSeparator = () => {
  return <Divider bg="#eee" />;
};
function SavedAddressesScreen(): JSX.Element {
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
            {t('addresses.title')}
          </Heading>
        </HStack>
        <FlatList
          data={AddressDummyData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={renderSeparator}
          renderItem={({item}) => (
            <AddressItem
              data={item}
              onItemPress={(id: number) => console.log('id', id)}
            />
          )}
        />
        {/* <Button m={5} onPress={() => navigation.navigate('AddressDetails')}> */}
        <Button m={5}>
          <Text fontWeight={700} fontSize={16}>
            {t('addresses.add')}
          </Text>
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SavedAddressesScreen;
