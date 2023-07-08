import {Button, FlatList, IconButton, Input, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import theme from '../../../../Theme';
import FaqDummyData from '../../../../Dummy/Faq';
import FaqItem from '../../../../Components/ListRender/FaqItem';
import {Filter, Search} from 'react-native-iconly';

// import {useTranslation} from 'react-i18next';

function FaqScreen(): JSX.Element {
  // const {t} = useTranslation();
  const Categories = [
    {id: 0, title: 'General'},
    {id: 1, title: 'Account'},
    {id: 2, title: 'Service'},
    {id: 3, title: 'Payment'},
  ];
  const [cat, setCat] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <VStack p={2} flex={1} backgroundColor={'#fafafa'}>
        <FlatList
          data={FaqDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <FaqItem data={item} />}
          ListHeaderComponent={
            <VStack space={2}>
              <Input
                InputLeftElement={
                  <IconButton
                    icon={<Search color="#9E9E9E" set="light" />}
                    borderRadius="full"
                  />
                }
                InputRightElement={
                  <IconButton
                    icon={
                      <Filter color={theme.colors.primary[500]} set="light" />
                    }
                    borderRadius="full"
                  />
                }
                mt={4}
                size="md"
                placeholder="Search"
              />
              <FlatList
                data={Categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <Button
                    variant={cat === item.id ? 'solid' : 'outline'}
                    ml={2}
                    px={6}
                    onPress={() => setCat(item.id)}
                    borderColor={theme.colors.primary[500]}
                    height={'45px'}>
                    <Text
                      color={
                        cat === item.id ? '#35383F' : theme.colors.primary[500]
                      }
                      fontWeight={700}
                      fontSize={16}>
                      {item.title}
                    </Text>
                  </Button>
                )}
              />
            </VStack>
          }
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
export default FaqScreen;
