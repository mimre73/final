import React, {useMemo, useCallback} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import {useBetween} from 'use-between';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import useHomeSheetsController from '../../ViewControllers/Home/useHomeSheetsController';
const useSharedSheet = () => useBetween(useHomeSheetsController);

interface Props {
  children: React.ReactElement;
  snapIndex?: number;
  pressBehavior?: 'none' | 'collapse' | 'close';
  dynamicHeight?: boolean;
  enablePanDownToClose?: boolean;
  disableBackDrop?: boolean;
  ref?: React.RefObject<BottomSheetMethods>;
  sheetName?: 'movingToPickupSheet' | 'travelingToDestinationSheet';
}

const MyBottomSheet = (sheetProps: Props) => {
  const {movingToPickupSheet, travelingToDestinationSheet} = useSharedSheet();
  const dynamicSnapPoints = useMemo(() => ['CONTENT_HEIGHT', '0'], []);
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(dynamicSnapPoints);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={sheetProps.pressBehavior || 'collapse'}
      />
    ),
    [sheetProps.pressBehavior],
  );
  const getSheetRef = (name: string) => {
    switch (name) {
      case 'movingToPickupSheet':
        return movingToPickupSheet;
      case 'travelingToDestinationSheet':
        return travelingToDestinationSheet;
      case 'promoDetails':
        return travelingToDestinationSheet;
    }
  };
  return (
    <BottomSheet
      ref={
        sheetProps.sheetName
          ? getSheetRef(sheetProps.sheetName)
          : sheetProps.ref
      }
      index={sheetProps.snapIndex}
      animationConfigs={animationConfigs}
      animateOnMount={true}
      enableContentPanningGesture={true}
      backdropComponent={sheetProps.disableBackDrop ? null : renderBackdrop}
      enableHandlePanningGesture={true}
      enablePanDownToClose={sheetProps.enablePanDownToClose}
      // dynamic
      snapPoints={sheetProps.dynamicHeight ? animatedSnapPoints : snapPoints}
      handleHeight={sheetProps.dynamicHeight ? animatedHandleHeight : undefined}
      contentHeight={
        sheetProps.dynamicHeight ? animatedContentHeight : undefined
      }>
      {sheetProps.dynamicHeight ? (
        <BottomSheetView onLayout={handleContentLayout}>
          {sheetProps.children}
        </BottomSheetView>
      ) : (
        sheetProps.children
      )}
    </BottomSheet>
  );
};

export default MyBottomSheet;
