import {HStack, IconButton, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Message, Notification, Setting, Star} from 'react-native-iconly';
// new
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import useAddressLocationController from '../../../ViewControllers/Home/Request/useAddressLocationController';
import DistanceContent from '../../../Components/Sheets/DistanceContent';
import theme from '../../../Theme';

function AddressLocationScreen(): JSX.Element {
  // refs
  // const distanceSheet = useRef<BottomSheet>(null);

  const {
    initialRegion,
    onInboxPress,
    onNotifsPress,
    onOffersPress,
    onSettingsPress,
    animatedContentHeight,
    animatedHandleHeight,
    animatedSnapPoints,
    handleContentLayout,
    distanceSheetRef,
    onMapReady,
    directionResult,
  } = useAddressLocationController();
  const origin = {latitude: 37.8044510952722, longitude: -122.43742950260639};
  const destination = {
    latitude: 37.76247544392115,
    longitude: -122.41689518094061,
  };
  return (
    <VStack flex={1} backgroundColor={'white'}>
      <MapView
        style={styles.mapRoot}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={'AIzaSyATfoerwrUkj9QTlGgPUP3NkF2ovzCND94'}
          strokeWidth={7}
          strokeColor={theme.colors.primary[500]}
          optimizeWaypoints={true}
          onStart={params => {
            console.log(
              `Started routing between "${params.origin}" and "${params.destination}"`,
            );
          }}
          onReady={onMapReady}
        />
        {/* {polilyneCoordinates.length > 1 && (
          <Marker testID="origin-marker" coordinate={polilyneCoordinates[0]}>
            <View style={styles.outerMarkerContainer}>
              <View style={styles.markerContainer}>
                <Location set="bold" color="black" />
              </View>
            </View>
          </Marker>
        )}
        {polilyneCoordinates.length > 1 && (
          <Marker
            testID="destination-marker"
            coordinate={polilyneCoordinates[polilyneCoordinates.length - 1]}>
            <View style={styles.outerMarkerContainer}>
              <View style={styles.markerContainer}>
                <Location set="bold" color="black" />
              </View>
            </View>
          </Marker>
        )} */}
      </MapView>
      <View style={styles.actionsContainer}>
        <HStack justifyContent="space-between" flex={1}>
          <IconButton
            variant="solid"
            bg={'primary[200]'}
            onPress={onSettingsPress}
            icon={<Setting color="#35383F" set="light" />}
            borderRadius="full"
          />
          <HStack space={3}>
            <IconButton
              variant="solid"
              bg={'primary[200]'}
              onPress={onInboxPress}
              icon={<Message color="#35383F" set="light" />}
              borderRadius="full"
            />
            <IconButton
              variant="solid"
              bg={'primary[200]'}
              onPress={onNotifsPress}
              icon={<Notification color="#35383F" set="curved" />}
              borderRadius="full"
            />
            <IconButton
              variant="solid"
              bg={'primary[200]'}
              onPress={onOffersPress}
              icon={<Star color="#35383F" set="curved" />}
              borderRadius="full"
            />
          </HStack>
        </HStack>
      </View>
      <BottomSheet
        ref={distanceSheetRef}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose={false}
        animateOnMount={true}>
        <BottomSheetView onLayout={handleContentLayout}>
          <DistanceContent
            loading={false}
            startAddress={directionResult?.legs[0].start_address || ''}
            endAddress={directionResult?.legs[0].end_address || ''}
          />
        </BottomSheetView>
      </BottomSheet>
    </VStack>
  );
}
const styles = StyleSheet.create({
  mapRoot: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    margin: 10,
  },
  actionsContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  outerMarkerContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#FEBB1B55',
  },
  markerContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 50,

    justifyContent: 'center',
    backgroundColor: '#FEBB1B',
  },
});
export default AddressLocationScreen;
