import {useState} from 'react';
import {SearchedResults} from '../DataTypes/MapTypes';
import {useReduxDispatch} from '../Store';
import {getGeometryByPlaceId, searchAddress} from '../Api/map';
import {setDestination} from '../Store/slices/booking';

const useSearchResultController = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState<Array<SearchedResults>>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useReduxDispatch();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const filters = [
    {id: 1, title: 'Location'},
    {id: 2, title: 'Home'},
    {id: 3, title: 'Office'},
    {id: 4, title: 'Apartment'},
  ];
  const toggleShowFilters = () => {
    setShowFilter(!showFilter);
  };

  const searchFilterFunction = async () => {
    setLoading(true);
    const response = await searchAddress(searchQuery);
    const tmp = response.predictions.map((itm: any) => {
      return {
        title: itm.structured_formatting.main_text,
        description: itm.structured_formatting.secondary_text,
        place_id: itm.place_id,
      };
    });
    setData(tmp);
    setLoading(false);
  };

  const onItemSearchPress = async (placeId: string) => {
    const response = await getGeometryByPlaceId(placeId);
    if (response.result) {
      const temp = {
        latitude: response.result.geometry.location.lat,
        longitude: response.result.geometry.location.lng,
        title: response.result.formatted_address,
      };
      console.log('data', temp);
      dispatch(setDestination(temp));
    }
  };
  return {
    searchFilterFunction,
    filters,
    showFilter,
    toggleShowFilters,
    searchQuery,
    setSearchQuery,
    onItemSearchPress,
    data,
    loading,
  };
};

export default useSearchResultController;
