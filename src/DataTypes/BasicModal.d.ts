interface BasicModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  navigation?: NativeStackNavigationProp<any, any>;
}
