/* eslint-disable react-native/no-inline-styles */
import {
  HStack,
  Heading,
  IconButton,
  Pressable,
  VStack,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Animated} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
  Route,
} from 'react-native-tab-view';
import theme from '../../../../Theme';
import FaqScreen from './FaqScreen';
import ContactUsScreen from './ContactUsScreen';

function HelpCenterScreen(): JSX.Element {
  const {t} = useTranslation();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: 'faq', title: 'FAQ'},
    {key: 'contactus', title: 'Contact us'},
  ]);
  const renderScene = SceneMap({
    faq: FaqScreen,
    contactus: ContactUsScreen,
  });
  const _renderTabBar = (
    props: SceneRendererProps & {navigationState: NavigationState<Route>},
  ) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route: Route, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const dividerOpacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0,
            ),
          });
          return (
            <Pressable
              key={i}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text
                style={{opacity: opacity, fontFamily: 'Urbanist-Medium'}}>
                {route.title}
              </Animated.Text>
              <Animated.View
                style={{
                  opacity: dividerOpacity,
                  borderBottomWidth: 4,
                  position: 'relative',
                  zIndex: 9999,
                  // marginBottom: -2,
                  borderRadius: 100,
                  marginTop: 16,
                  width: '100%',
                  borderBottomColor: theme.colors.primary[500],
                }}
              />
            </Pressable>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center" space={4} pt={10} px={5}>
            <IconButton
              icon={<ArrowLeft set="light" color="black" />}
              borderRadius="full"
            />
            <MoreCircle set="curved" color="black" />
            <Heading fontWeight={700} fontSize={24}>
              {t('help.title')}
            </Heading>
          </HStack>
          <HStack space={4} pt={10} px={5}>
            <IconButton
              icon={<MoreCircle set="light" color="black" />}
              borderRadius="full"
            />
          </HStack>
        </HStack>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={_renderTabBar}
        />
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomColor: '#eee',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    paddingTop: 16,
  },
  selectedTabBar: {
    borderBottomColor: theme.colors.primary[500],
    borderWidth: 5,
    borderRadius: 100,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
});
export default HelpCenterScreen;
