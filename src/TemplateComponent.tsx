import {Text, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

function Screen(): JSX.Element {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <Text>{t('module.child')}</Text>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Screen;
