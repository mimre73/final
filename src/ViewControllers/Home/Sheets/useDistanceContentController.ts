import {useNavigation} from '@react-navigation/native';
import {getDistance} from 'geolib';
import {useEffect, useState} from 'react';

const useDistanceContentController = () => {
  const navigation = useNavigation();
  const [distance, setDistance] = useState<number>();
  useEffect(() => {
    setDistance(
      getDistance(
        {latitude: 37.8044510952722, longitude: -122.43742950260639},
        {latitude: 37.76247544392115, longitude: -122.41689518094061},
      ),
    );
  }, []);
  const onContinuePress = () => {
    navigation.navigate('SelectVehicleType');
  };
  return {onContinuePress, distance};
};

export default useDistanceContentController;
