import BottomSheet from '@gorhom/bottom-sheet';
import {useRef} from 'react';

const useHomeSheetsController = () => {
  const movingToPickupSheet = useRef<BottomSheet>(null);
  const travelingToDestinationSheet = useRef<BottomSheet>(null);

  const openMovingToPickupSheet = () => {
    movingToPickupSheet.current?.expand();
  };
  const closeTravelingToPickupSheet = () => {
    movingToPickupSheet.current?.snapToIndex(-1);
  };
  const openTravelingToPickupSheet = () => {
    travelingToDestinationSheet.current?.expand();
    movingToPickupSheet.current?.collapse();
  };
  const closeMovingToPickupSheet = () => {
    travelingToDestinationSheet.current?.snapToIndex(-1);
  };
  return {
    movingToPickupSheet,
    travelingToDestinationSheet,
    openMovingToPickupSheet,
    closeMovingToPickupSheet,
    closeTravelingToPickupSheet,
    openTravelingToPickupSheet,
  };
};

export default useHomeSheetsController;
