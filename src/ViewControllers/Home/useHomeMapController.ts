import {useCallback, useEffect, useState} from 'react';
import {Dimensions, PermissionsAndroid} from 'react-native';
import {LatLng} from 'react-native-maps';
const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const useHomeMapController = () => {
  const [markers, setMarkers] = useState<LatLng[]>([]);
  const [_, sethasLocationPermissions] = useState(false);
  const initialRegion = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        sethasLocationPermissions(true);
        console.log('You can use the location');
        // alert('You can use the location');
      } else {
        console.log('location permission denied');
        // alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const randomizeCoordinatesAndColors = useCallback(() => {
    const newMarkers = new Array(7).fill(0).map(() => {
      return {
        latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
        longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
      };
    });

    setMarkers(newMarkers);
  }, []);
  useEffect(() => {
    randomizeCoordinatesAndColors();
    requestLocationPermission();
  }, [randomizeCoordinatesAndColors]);
  return {markers, initialRegion};
};

export default useHomeMapController;
