import React from 'react';
import {
  VStack,
  Button,
  IconButton,
  HStack,
  Text,
  Pressable,
  View,
  Image,
  Center,
} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';
import {
  ArrowLeft,
  Call,
  Calling,
  Message,
  MoreCircle,
} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import useForgotPasswordController from '../../../ViewControllers/Auth/Forgot/useForgotPasswordController';
import Images from '../../../Constants/Images';
import theme from '../../../Theme';

function ForgotPasswordScreen(): JSX.Element {
  const {t} = useTranslation();
  const {method, setMethod, onBackPress, onForgotPress} =
    useForgotPasswordController();

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <VStack p={5} flex={1} backgroundColor={'white'}>
        <HStack py={6} alignItems="center">
          <IconButton
            onPress={onBackPress}
            icon={<ArrowLeft color="black" />}
            borderRadius="full"
          />
          <IconButton
            icon={<MoreCircle set="curved" color="black" />}
            borderRadius="full"
          />

          <Text fontSize={20} fontWeight={700}>
            {t('forgotPassword.title')}
          </Text>
        </HStack>
        <Center>
          <Image source={Images.forgotPassword.image} alt="forgot" />
        </Center>
        <Text mt={2} fontSize={18}>
          {t('forgotPassword.desc')}
        </Text>

        <Pressable mt={4} onPress={() => setMethod(1)}>
          <View
            p={4}
            borderRadius={10}
            borderWidth={method === 1 ? 3 : 1}
            borderColor={method === 1 ? theme.colors.primary[500] : '#EEEEEE'}>
            <HStack space={4} alignItems="center">
              <View style={styles.badge}>
                <Call set="bold" color={theme.colors.primary[500]} />
              </View>
              <VStack>
                <Text fontSize={14}>{t('forgotPassword.sms')}</Text>
                <Text fontSize={16} fontWeight={800}>
                  +1 111 ******99s
                </Text>
              </VStack>
            </HStack>
          </View>
        </Pressable>
        <Pressable mt={4} onPress={() => setMethod(2)}>
          <View
            p={4}
            borderRadius={10}
            borderWidth={method === 2 ? 3 : 1}
            borderColor={method === 2 ? theme.colors.primary[500] : '#EEEEEE'}>
            <HStack space={4} alignItems="center">
              <View style={styles.badge}>
                <Message set="bold" color={theme.colors.primary[500]} />
              </View>
              <VStack>
                <Text fontSize={14}>{t('forgotPassword.email')}</Text>
                <Text fontSize={16} fontWeight={800}>
                  and***ley@yourdomain.com
                </Text>
              </VStack>
            </HStack>
          </View>
        </Pressable>
        <Pressable mt={4} onPress={() => setMethod(3)}>
          <View
            p={4}
            borderRadius={10}
            borderWidth={method === 3 ? 3 : 1}
            borderColor={method === 3 ? theme.colors.primary[500] : '#EEEEEE'}>
            <HStack space={4} alignItems="center">
              <View style={styles.badge}>
                <Calling set="bold" color={theme.colors.primary[500]} />
              </View>
              <VStack>
                <Text fontSize={14}>{t('forgotPassword.call')}</Text>
                <Text fontSize={16} fontWeight={800}>
                  +1 111 ******99s
                </Text>
              </VStack>
            </HStack>
          </View>
        </Pressable>
        <Button mt={4} onPress={onForgotPress}>
          {t('common.continue')}
        </Button>
      </VStack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  root: {
    flexGrow: 1,
  },
  badge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: theme.colors.primary[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ForgotPasswordScreen;
