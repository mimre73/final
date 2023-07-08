import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {Image} from 'native-base';
import useHomeMapController from '../../ViewControllers/Home/useHomeMapController';
import Images from '../../Constants/Images';

function HomeMapComponent(): JSX.Element {
  const {markers, initialRegion} = useHomeMapController();
  return (
    <MapView initialRegion={initialRegion} style={styles.mapRoot}>
      {markers.map((marker, index) => (
        <Marker key={index} coordinate={marker}>
          <Image
            alt="car-marker"
            source={Images.map.car}
            style={styles.markerStyle}
          />
        </Marker>
      ))}
    </MapView>
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
  markerStyle: {height: 35, width: 35},
});
export default HomeMapComponent;
