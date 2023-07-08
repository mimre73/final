import {GOOGLE_MAP_KEY} from '@constants/index';
import axios from 'axios';

export const searchAddress = async (address: string) => {
  try {
    const response: any = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${GOOGLE_MAP_KEY}`,
    );
    return response.data;
  } catch (err) {
    console.log('dsadsa', err);
    throw err;
  }
};

export const getGeometryByPlaceId = async (placeId: string) => {
  try {
    const response: any = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_MAP_KEY}`,
    );
    return response.data;
  } catch (err) {
    console.log('dsadsa', err);
    throw err;
  }
};
