import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {useReduxDispatch, useReduxSelector} from '../../../Store';
import {setOrigin} from '../../../Store/slices/booking';

const useSelectAddressContentController = () => {
  const navigation = useNavigation();
  const {origin, destination} = useReduxSelector(state => state.booking);
  const dispatch = useReduxDispatch();
  const onItemPress = () => {
    navigation.navigate('SettingsNavigator');
  };
  const onSearchResultPress = () => {
    navigation.navigate('SearchResult');
  };
  const onCurrentLocationPress = () => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      dispatch(
        setOrigin({
          latitude: crd.latitude,
          longitude: crd.longitude,
          title: 'Current Location',
        }),
      );
    });
  };
  return {
    onItemPress,
    onSearchResultPress,
    onCurrentLocationPress,
    origin,
    destination,
  };
};

export default useSelectAddressContentController;
