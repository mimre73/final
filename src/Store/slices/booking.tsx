import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// types
interface PointType {
  latitude: number;
  longitude: number;
  title: string;
}
interface BookingState {
  origin: PointType | null;
  destination: PointType | null;
}

const initialState: BookingState = {
  origin: null,
  destination: null,
};
const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<PointType>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<PointType>) => {
      state.destination = action.payload;
    },
  },
});

export const {setOrigin, setDestination} = bookingSlice.actions;
export default bookingSlice.reducer;
