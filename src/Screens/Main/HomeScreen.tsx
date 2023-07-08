import {VStack} from 'native-base';
import React from 'react';
import HomeMapComponent from '../../Components/HomeMap';
import HomeActionsComponent from '../../Components/HomeActions';
import MyBottomSheet from '../../Components/MyBottomSheet';
import RecentAddressesContent from '../../Components/Sheets/RecentAddressesContent';
import SelectAddressContent from '../../Components/Sheets/SelectAddressContent';

function HomeScreen(): JSX.Element {
  return (
    <VStack flex={1} backgroundColor={'white'}>
      <HomeMapComponent />
      <HomeActionsComponent />
      <MyBottomSheet
        snapIndex={0}
        disableBackDrop
        enablePanDownToClose={false}
        sheetName="movingToPickupSheet">
        <RecentAddressesContent />
      </MyBottomSheet>
      <MyBottomSheet
        snapIndex={-1}
        pressBehavior="close"
        enablePanDownToClose={true}
        sheetName="travelingToDestinationSheet">
        <SelectAddressContent />
      </MyBottomSheet>
    </VStack>
  );
}
export default HomeScreen;
