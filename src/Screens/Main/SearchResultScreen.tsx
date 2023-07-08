/* eslint-disable react-native/no-inline-styles */
import {
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Spinner,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {FlatList} from 'react-native';
import {Filter, Search} from 'react-native-iconly';
import SearchFilterItem from '../../Components/ListRender/SearchFilterItem';
import AddressHistoryItem from '../../Components/ListRender/AddressHistoryItem';
import useSearchResultController from '../../ViewControllers/useSearchResultController';
import Images from '../../Constants/Images';
import theme from '../../Theme';
function SearchResultScreen(): JSX.Element {
  const {
    filters,
    showFilter,
    toggleShowFilters,
    setSearchQuery,
    searchFilterFunction,
    searchQuery,
    data,
    loading,
    onItemSearchPress,
  } = useSearchResultController();
  return (
    <VStack backgroundColor={'white'} flex={1} p={5} pt={10}>
      <Input
        InputLeftElement={
          <IconButton
            icon={<Search color="#bdbdbd" set="light" />}
            borderRadius="full"
          />
        }
        InputRightElement={
          <IconButton
            onPress={toggleShowFilters}
            icon={
              <Filter
                color={showFilter ? theme.colors.primary[500] : '#9E9E9E'}
                set="bold"
              />
            }
            borderRadius="full"
          />
        }
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder=""
        onSubmitEditing={searchFilterFunction}
      />
      {searchQuery && (
        <HStack mt={2} alignItems="center" justifyContent="space-between">
          <HStack>
            <Text fontSize={20} fontWeight={700}>
              Results for "
            </Text>
            <Text fontSize={20} fontWeight={700} color="primary[500]">
              {searchQuery}
            </Text>
            <Text>"</Text>
          </HStack>
          <Text color="primary">{`${data.length} found`}</Text>
        </HStack>
      )}
      {loading ? (
        <VStack flex={1} space={2} alignItems="center" justifyContent="center">
          <Spinner accessibilityLabel="Loading places" size="lg" />
          <Heading color="primary.500" fontSize="xl">
            Loading...
          </Heading>
        </VStack>
      ) : (
        <FlatList
          ListHeaderComponent={
            showFilter ? (
              <FlatList
                data={filters}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <SearchFilterItem
                    data={item}
                    onItemPress={() => console.log('pressed')}
                  />
                )}
              />
            ) : null
          }
          ListHeaderComponentStyle={{paddingBottom: 10}}
          ListEmptyComponent={
            <VStack mt={20} alignItems="center" justifyContent="center">
              <Image
                alt="empty"
                source={Images.searchResult.empty}
                size="2xl"
              />
              <Heading mt={4} fontSize={24}>
                Not Found
              </Heading>
              <Text mt={2} textAlign="center" fontSize={18}>
                Sorry, the keyword you entered cannot be found, please check
                again or search with another keyword.
              </Text>
            </VStack>
          }
          style={{flex: 1, paddingTop: 10}}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <AddressHistoryItem
              data={item}
              onItemPress={() => onItemSearchPress(item.place_id)}
            />
          )}
        />
      )}
    </VStack>
  );
}
export default SearchResultScreen;
