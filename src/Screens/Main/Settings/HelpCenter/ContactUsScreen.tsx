import {HStack, Image, Pressable, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Images from '../../../../Constants/Images';

// import {useTranslation} from 'react-i18next';

function ContactUsScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <VStack flex={1}>
          <Pressable m={2} bg={'white'} px={4} py={5} borderRadius={10}>
            <HStack space={3}>
              <Image alt="customer service" source={Images.help.cs} />
              <Text fontWeight={700} fontSize={18}>
                Customer Service
              </Text>
            </HStack>
          </Pressable>
          <Pressable m={2} bg={'white'} px={4} py={5} borderRadius={10}>
            <HStack space={3}>
              <Image alt="WhatsApp" source={Images.help.wa} />
              <Text fontWeight={700} fontSize={18}>
                WhatsApp
              </Text>
            </HStack>
          </Pressable>
          <Pressable m={2} bg={'white'} px={4} py={5} borderRadius={10}>
            <HStack space={3}>
              <Image alt="Website" source={Images.help.wb} />
              <Text fontWeight={700} fontSize={18}>
                Website
              </Text>
            </HStack>
          </Pressable>
          <Pressable m={2} bg={'white'} px={4} py={5} borderRadius={10}>
            <HStack space={3}>
              <Image alt="Facebook" source={Images.help.fb} />
              <Text fontWeight={700} fontSize={18}>
                Facebook
              </Text>
            </HStack>
          </Pressable>
          <Pressable m={2} bg={'white'} px={4} py={5} borderRadius={10}>
            <HStack space={3}>
              <Image alt="Twitter" source={Images.help.tw} />
              <Text fontWeight={700} fontSize={18}>
                Twitter
              </Text>
            </HStack>
          </Pressable>
          <Pressable m={2} bg={'white'} px={4} py={5} borderRadius={10}>
            <HStack space={3}>
              <Image alt="instagram" source={Images.help.ig} />
              <Text fontWeight={700} fontSize={18}>
                Instagram
              </Text>
            </HStack>
          </Pressable>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
export default ContactUsScreen;
