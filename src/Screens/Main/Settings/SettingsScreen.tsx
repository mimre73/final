import {
  Avatar,
  Center,
  HStack,
  Heading,
  IconButton,
  Pressable,
  ScrollView,
  Switch,
  Text,
  VStack,
  View,
  theme,
} from 'native-base';
import React, {useMemo} from 'react';

import {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  Chart,
  ChevronRight,
  CloseSquare,
  Delete,
  Document,
  EditSquare,
  InfoSquare,
  Location,
  Lock,
  Logout,
  MoreCircle,
  Notification,
  ShieldDone,
  Show,
  TwoUsers,
  Wallet,
} from 'react-native-iconly';
import LogoSvg from '../../../Components/IconComponents/Logo';
import DeleteAccountContent from '../../../Components/Sheets/DeleteAccountContent';
import LogoutContent from '../../../Components/Sheets/LogoutContent';
import Images from '../../../Constants/Images';
import useSettingsController from '../../../ViewControllers/useSettingsController';

function SettingsScreen() {
  const {
    deleteSheetRef,
    logoutSheetRef,
    onBackPress,
    onDeletePress,
    onLogoutPress,
    onNavigate,
  } = useSettingsController();
  const dynamicSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedContentHeight,
    handleContentLayout,
    animatedSnapPoints,
  } = useBottomSheetDynamicSnapPoints(dynamicSnapPoints);
  return (
    <VStack flex={1}>
      <HStack p={4} alignItems="center" justifyContent="space-between">
        <LogoSvg />

        <IconButton
          onPress={onBackPress}
          icon={<CloseSquare set="light" color="black" />}
          borderRadius="full"
        />
      </HStack>
      <ScrollView>
        <View>
          <Center>
            <Avatar borderWidth={0} size={'2xl'} source={Images.map.avatar}>
              <Avatar.Badge bg="transparent">
                <EditSquare set="bold" color="#FEBB1B" />
              </Avatar.Badge>
            </Avatar>
            <Heading mt={2} fontSize={24} fontWeight={700}>
              Andrew Ainsley
            </Heading>
          </Center>
          {/* 0 */}
          <Pressable mt={4} onPress={() => onNavigate('Bookings')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Chart set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Booking History
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 1 */}
          <Pressable onPress={() => onNavigate('Address')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Location set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Saved Addresses
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 2 */}
          <Pressable onPress={() => onNavigate('NotificationSettings')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Notification set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Notification Settings
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 3 */}
          <Pressable onPress={() => onNavigate('PaymentMethod')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Wallet set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Payment Methods
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 4 */}
          <Pressable onPress={() => onNavigate('TransactionHistory')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Document set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Transaction Reports
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 5 */}
          <Pressable onPress={() => onNavigate('Security')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <ShieldDone set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Security
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 6 */}
          <Pressable onPress={() => onNavigate('Privacy')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Lock set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Privacy Policy
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 7 */}
          <Pressable onPress={() => onNavigate('HelpCenter')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <InfoSquare set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Help Center
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 8 */}
          <Pressable onPress={() => onNavigate('InviteFriends')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <TwoUsers set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Invite Friends
                </Text>
              </HStack>
              <ChevronRight color="black" />
            </HStack>
          </Pressable>
          {/* 9 */}
          <Pressable onPress={() => onNavigate('Languages')}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <MoreCircle set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Language
                </Text>
              </HStack>
              <HStack alignItems="center" space={2}>
                <Text fontSize={18} fontWeight={600}>
                  English (US)
                </Text>
                <ChevronRight color="black" />
              </HStack>
            </HStack>
          </Pressable>
          {/* 11 */}
          <Pressable>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Show set="curved" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Dark Mode
                </Text>
              </HStack>
              <Switch size="md" />
            </HStack>
          </Pressable>
          {/* 12 */}
          <Pressable onPress={onLogoutPress}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Logout set="curved" color={theme.colors.error[500]} />
                <Text color="error.500" fontSize={18} fontWeight={600}>
                  Logout
                </Text>
              </HStack>
            </HStack>
          </Pressable>
          {/* 13 */}
          <Pressable mb={4} onPress={onDeletePress}>
            <HStack
              px={4}
              py={2}
              alignItems="center"
              justifyContent="space-between">
              <HStack alignItems="center" space={2}>
                <Delete set="light" color="black" />
                <Text fontSize={18} fontWeight={600}>
                  Delete Account
                </Text>
              </HStack>
            </HStack>
          </Pressable>
        </View>
      </ScrollView>
      <BottomSheet
        ref={logoutSheetRef}
        snapPoints={animatedSnapPoints}
        index={-1}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose={true}
        animateOnMount={true}>
        <BottomSheetView onLayout={handleContentLayout}>
          <LogoutContent sheetRef={logoutSheetRef} />
        </BottomSheetView>
      </BottomSheet>
      <BottomSheet
        ref={deleteSheetRef}
        index={-1}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose={true}
        animateOnMount={true}>
        <BottomSheetView onLayout={handleContentLayout}>
          <DeleteAccountContent sheetRef={deleteSheetRef} />
        </BottomSheetView>
      </BottomSheet>
    </VStack>
  );
}
export default SettingsScreen;
