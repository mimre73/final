import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {HStack, IconButton, VStack} from 'native-base';
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Message, Notification, Setting, Star} from 'react-native-iconly';
import {BasicPageProps} from '../../../@types/NavigationTypes';
import MyBottomSheet from '../../../Components/MyBottomSheet';
// import {directionsClient} from '../../../Utils/MapBoxClient';
import DriverArrivingContent from '../../../Components/Sheets/DriverArrivingContent';
// import RouteSimulator from '../../../Utils/RouteSimulator';
import MoodTripContent from '../../../Components/Sheets/MoodTripContent';
import RateTripContent from '../../../Components/Sheets/RateTripContent';
import TipTripContent from '../../../Components/Sheets/TipTripContent';
import TripToDestinationContent from '../../../Components/Sheets/TripToDestinationContent';

function DriverArrivingScreen({navigation}: BasicPageProps): JSX.Element {
  // refs
  const distanceSheet = useRef<BottomSheet>(null);
  const tripSheet = useRef<BottomSheet>(null);
  const tipSheet = useRef<BottomSheet>(null);
  const moodSheet = useRef<BottomSheet>(null);
  const rateSheet = useRef<BottomSheet>(null);

  // drive line
  // const onStart = useCallback(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-shadow
  //   const routeSimulator = new RouteSimulator(route);
  //   routeSimulator.addListener((cp: any) => setCurrentPoint(cp));
  //   routeSimulator.start();
  //   setRouteSimulator(routeSimulator);
  // }, [route]);
  // const renderRoute = () => {
  //   if (!route) {
  //     return null;
  //   }

  //   return (
  //     <Mapbox.ShapeSource id="routeSource" shape={route}>
  //       <Mapbox.LineLayer
  //         id="routeFill"
  //         style={layerStyles.route}
  //         belowLayerID="originInnerCircle"
  //       />
  //     </Mapbox.ShapeSource>
  //   );
  // };

  // const renderCurrentPoint = () => {
  //   if (!currentPoint) {
  //     return;
  //   }
  //   return (
  //     <PulseCircleLayer
  //       shape={currentPoint}
  //       aboveLayerID="destinationInnerCircle"
  //     />
  //   );
  // };
  // const renderProgressLine = () => {
  //   if (!currentPoint) {
  //     return null;
  //   }

  //   const {nearestIndex} = currentPoint.properties;
  //   const coords = route.geometry.coordinates.filter(
  //     (c: any, i: number) => i <= nearestIndex,
  //   );
  //   coords.push(currentPoint.geometry.coordinates);

  //   if (coords.length < 2) {
  //     return null;
  //   }

  //   const lineString = makeLineString(coords);
  //   return (
  //     <Mapbox.Animated.ShapeSource id="progressSource" shape={lineString}>
  //       <Mapbox.LineLayer
  //         id="progressFill"
  //         style={layerStyles.progress}
  //         aboveLayerID="routeFill"
  //       />
  //     </Mapbox.Animated.ShapeSource>
  //   );
  // };

  // const renderOrigin = () => {
  //   return (
  //     <Mapbox.ShapeSource id="origin" shape={point(SF_OFFICE_COORDINATE)}>
  //       <Mapbox.CircleLayer id="originInnerCircle" />
  //       {/* <OriginIcon /> */}
  //     </Mapbox.ShapeSource>
  //   );
  // };

  // useEffect(() => {
  //   async function lineDraw() {
  //     const reqOptions = {
  //       waypoints: [
  //         {coordinates: SF_OFFICE_COORDINATE},
  //         {coordinates: SF_ZOO_COORDINATE},
  //       ],
  //       profile: 'walking',
  //       geometries: 'geojson',
  //     };

  //     const res = await directionsClient.getDirections(reqOptions).send();
  //     setRoute(makeLineString(res.body.routes[0].geometry.coordinates));
  //   }
  //   lineDraw();
  // }, [routeSimulator, route]);
  return (
    <VStack flex={1} backgroundColor={'white'}>
      {/* <Mapbox.MapView
        scaleBarEnabled={false}
        logoEnabled={false}
        attributionEnabled={false}
        styleURL="mapbox://styles/mimre/ckufb40p49yir19ns8pkseqfz"
        style={styles.mapRoot}> */}
      {/* <Mapbox.Camera
          allowUpdates
          zoomLevel={14}
          followPitch={1}
          centerCoordinate={centerCoord}
        />
        {renderOrigin()}

        {renderRoute()}
        {renderCurrentPoint()}
        {renderProgressLine()} */}
      {/* <Mapbox.ShapeSource
          id="destinationInnerCircle"
          shape={point(SF_ZOO_COORDINATE)}>
          {DestinationIcon()}
        </Mapbox.ShapeSource> */}
      {/* <Mapbox.ShapeSource id="destination" shape={point(SF_ZOO_COORDINATE)}>
          <Mapbox.CircleLayer
            id="destinationInnerCircle"
            style={layerStyles.destination}
          />
        </Mapbox.ShapeSource> */}
      {/* </Mapbox.MapView> */}
      <View style={styles.actionsContainer}>
        <HStack justifyContent="space-between" flex={1}>
          <IconButton
            variant="solid"
            bg={'primary[200]'}
            onPress={() => navigation.navigate('SettingsNavigator')}
            icon={<Setting color="#35383F" set="light" />}
            borderRadius="full"
          />
          <HStack space={3}>
            <IconButton
              variant="solid"
              bg={'primary[200]'}
              onPress={() => navigation.navigate('Inbox')}
              icon={<Message color="#35383F" set="light" />}
              borderRadius="full"
            />
            <IconButton
              variant="solid"
              bg={'primary[200]'}
              onPress={() => navigation.navigate('Notifications')}
              icon={<Notification color="#35383F" set="curved" />}
              borderRadius="full"
            />
            <IconButton
              variant="solid"
              bg={'primary[200]'}
              onPress={() => onStart()}
              icon={<Star color="#35383F" set="curved" />}
              borderRadius="full"
            />
          </HStack>
        </HStack>
      </View>
      <MyBottomSheet
        disableBackDrop
        dynamicHeight
        ref={distanceSheet}
        pressBehavior="close">
        <DriverArrivingContent
          navigation={navigation}
          onSubmit={() => {
            tripSheet.current?.expand();
            distanceSheet.current?.close();
          }}
        />
      </MyBottomSheet>
      <MyBottomSheet
        disableBackDrop
        snapIndex={-1}
        ref={tripSheet}
        pressBehavior="collapse">
        <TripToDestinationContent
          onSubmit={() => {
            moodSheet.current?.collapse();
            tripSheet.current?.close();
          }}
        />
      </MyBottomSheet>
      <MyBottomSheet
        disableBackDrop
        dynamicHeight
        snapIndex={-1}
        ref={moodSheet}
        pressBehavior="collapse">
        <MoodTripContent
          onSubmit={() => {
            rateSheet.current?.expand();
            moodSheet.current?.close();
          }}
        />
      </MyBottomSheet>
      <MyBottomSheet
        disableBackDrop
        dynamicHeight
        snapIndex={-1}
        ref={rateSheet}
        pressBehavior="close">
        <RateTripContent
          onSubmit={() => {
            tipSheet.current?.expand();
            rateSheet.current?.close();
          }}
        />
      </MyBottomSheet>
      <MyBottomSheet
        disableBackDrop
        dynamicHeight
        ref={tipSheet}
        snapIndex={-1}
        pressBehavior="close">
        <TipTripContent
          onSubmit={() => {
            tipSheet.current?.close();
          }}
        />
      </MyBottomSheet>
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
});
export default DriverArrivingScreen;
