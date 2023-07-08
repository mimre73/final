import {
  HStack,
  Heading,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';

function PrivacyScreen(): JSX.Element {
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
            {t('privacy.title')}
          </Heading>
        </HStack>
        <ScrollView>
          <VStack space={2} p={3}>
            <VStack space={3}>
              <Heading fontWeight={700} fontSize={20}>
                1. Types of Data We Collect
              </Heading>
              <Text fontWeight={400} fontSize={14}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </VStack>
            <VStack space={3}>
              <Heading fontWeight={700} fontSize={20}>
                2. Use of Your Personal Data
              </Heading>
              <Text fontWeight={400} fontSize={14}>
                Magna etiam tempor orci eu lobortis elementum nibh. Vulputate
                enim nulla aliquet porttitor lacus. Orci sagittis eu volutpat
                odio. Cras semper auctor neque vitae tempus quam pellentesque
                nec. Non quam lacus suspendisse faucibus interdum posuere lorem
                ipsum dolor. Commodo elit at imperdiet dui. Nisi vitae suscipit
                tellus mauris a diam. Erat pellentesque adipiscing commodo elit
                at imperdiet dui. Mi ipsum faucibus vitae aliquet nec
                ullamcorper. Pellentesque pulvinar pellentesque habitant morbi
                tristique senectus et.
              </Text>
            </VStack>
            <VStack space={3}>
              <Heading fontWeight={700} fontSize={20}>
                3. Disclosure of Your Personal Data
              </Heading>
              <Text fontWeight={400} fontSize={14}>
                Consequat id porta nibh venenatis cras sed. Ipsum nunc aliquet
                bibendum enim facilisis gravida neque. Nibh tellus molestie nunc
                non blandit massa. Quam pellentesque nec nam aliquam sem et
                tortor consequat id. Faucibus vitae aliquet nec ullamcorper sit
                amet risus. Nunc consequat interdum varius sit amet. Eget magna
                fermentum iaculis eu non diam phasellus vestibulum. Pulvinar
                pellentesque habitant morbi tristique senectus et. Lorem donec
                massa sapien faucibus et molestie. Massa tempor nec feugiat nisl
                pretium fusce id. Lacinia at quis risus sed vulputate odio.
                Integer vitae justo eget magna fermentum iaculis. Eget gravida
                cum sociis natoque penatibus et magnis.
              </Text>
            </VStack>
          </VStack>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PrivacyScreen;
