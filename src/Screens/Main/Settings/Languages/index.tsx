import {HStack, Heading, IconButton, SectionList, VStack} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import LanguageItem from '../../../../Components/ListRender/LanguageItem';
import languagesDummyData from '../../../../Dummy/Languages';

function LanguagesScreen(): JSX.Element {
  const {t} = useTranslation();
  const [lang, setLang] = useState<number>(1);
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
            {t('languages.title')}
          </Heading>
        </HStack>
        <SectionList
          sections={languagesDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <LanguageItem selected={lang} setSelected={setLang} data={item} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Heading fontSize={18} p="4" fontWeight={700}>
              {title}
            </Heading>
          )}
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
export default LanguagesScreen;
