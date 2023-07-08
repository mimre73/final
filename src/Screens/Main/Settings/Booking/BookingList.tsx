import {FlatList, Heading, Image, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {canceledBookings, completedBookings} from '../../../../Dummy/Bookings';
import BookingItem, {
  BookingType,
} from '../../../../Components/ListRender/BookingItem';
import Images from '../../../../Constants/Images';
import {useTranslation} from 'react-i18next';

interface Props {
  type: string;
}
function BookingList({type}: Props): JSX.Element {
  const {t} = useTranslation();
  const [data, setData] = useState<Array<BookingType>>([]);
  useEffect(() => {
    if (type === 'Active') {
      setData([]);
    } else if (type === 'Completed') {
      setData(completedBookings);
    } else {
      setData(canceledBookings);
    }
  }, [type]);
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'#E5E5E5'}>
        <FlatList
          data={data}
          contentContainerStyle={styles.container}
          ListEmptyComponent={
            <VStack
              flex={1}
              bg="white"
              space={4}
              alignItems="center"
              justifyContent="center">
              <Image
                alt="empty"
                source={Images.bookings.empty}
                width={200}
                height={200}
                resizeMode="contain"
              />
              <Heading fontWeight={700} fontSize={20}>
                {t('bookings.emptyActive')}
              </Heading>
              <Text fontWeight={500} fontSize={16}>
                {t('bookings.emptyActiveDesc')}
              </Text>
            </VStack>
          }
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <BookingItem data={item} type={type} />}
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
export default BookingList;
