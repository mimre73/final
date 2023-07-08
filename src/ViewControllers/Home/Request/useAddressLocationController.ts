import BottomSheet, {
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {useMemo, useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {MapDirectionsResponse} from 'react-native-maps-directions';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const useAddressLocationController = () => {
  const navigation = useNavigation();
  const [directionResult, setDirectionResult] =
    useState<MapDirectionsResponse>();
  const initialRegion = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const dynamicSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const distanceSheetRef = useRef<BottomSheet>(null);

  const {
    animatedHandleHeight,
    animatedContentHeight,
    handleContentLayout,
    animatedSnapPoints,
  } = useBottomSheetDynamicSnapPoints(dynamicSnapPoints);

  const onSettingsPress = () => {
    navigation.navigate('SettingsNavigator');
  };
  const onInboxPress = () => {
    navigation.navigate('Inbox');
  };
  const onOffersPress = () => {
    navigation.navigate('Offers');
  };
  const onNotifsPress = () => {
    navigation.navigate('Notifications');
  };
  const onMapReady = (result: MapDirectionsResponse) => {
    setDirectionResult(result);
  };
  return {
    initialRegion,
    onSettingsPress,
    onInboxPress,
    onOffersPress,
    onNotifsPress,
    animatedHandleHeight,
    handleContentLayout,
    animatedContentHeight,
    animatedSnapPoints,
    distanceSheetRef,
    directionResult,
    onMapReady,
  };
};

export default useAddressLocationController;
